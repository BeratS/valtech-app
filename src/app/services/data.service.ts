import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { IAlbums } from '../models/config';

@Injectable()
export class DataService {

  private albumsSubc = new BehaviorSubject<IAlbums[]>([]); 
  albums$ = this.albumsSubc.asObservable();

  limit = 30;

  constructor(
    private http: HttpClient
  ) { }

  findAlbumById(id: string): IAlbums | undefined {
    return this.albumsSubc.value.find(el => el.id === id);
  }

  getAlbumById(id: string): Observable<IAlbums> {
    return this.http.get<IAlbums>(`${environment.url}/id/${id}/info`)
                .pipe(take(1));
  }

  getAlbums(page = 1, limit = this.limit, cb = () => {}): void {
    let params = new HttpParams();

    params = params.append('page', page)
                   .append('limit', limit);

    this.http.get<IAlbums[]>(environment.urlApi, {params}).pipe(
      take(1),
      tap(result => {

        /**
         * One option is to optimize every image, by using file reader,
         * as they are too large, now for now I am using loading="lazy"
         * to the image tag, also there can be using as other option
         * IntersectionObserver as what we see to load,
         * Also other option is, to add a directive, and show a
         * placeholder image till it's loaded
         */

        this.albumsSubc.next(
          page === 1
            ? result
            : [...this.albumsSubc.value,...result]
        );
        if (cb) {cb();}
      })
    ).subscribe();
  }

}
