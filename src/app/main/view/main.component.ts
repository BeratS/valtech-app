import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  private scrollListener$!: Subscription;

  albums$ = this.service.albums$; 

  // Infinite scroll variables
  infiniteLoader = false;
  isScrolling = true;
  page = 1;

  constructor(
    private service: DataService
  ) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  ngAfterViewInit(): void {
    // on add scroll listener
    this.scrollListener$ = fromEvent(window, 'scroll').subscribe((e: Event) => {
      const target = (e.target as Element);
      const scrollTop = target.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = target.scrollHeight || document.documentElement.scrollHeight || document.body.scrollHeight;

      this.infiniteScroll({
        innerHeight: window.innerHeight,
        scrollTop,
        scrollHeight
      });
    });
  }

  ngOnDestroy(): void {
    this.scrollListener$?.unsubscribe();
  }

  getAlbums(page?: number): void {
    this.service.getAlbums(page, this.service.limit, () => {
      this.isScrolling = false;
    });
  }

  // Infinite Scroll method fires
  infiniteScroll(target: {innerHeight: number, scrollTop: number, scrollHeight: number}) {
    if (this.isScrolling) { return; }
    this.isScrolling = false;

    const more = 70;

    const {innerHeight, scrollTop, scrollHeight} = target;

    if ((innerHeight + scrollTop + more) >= scrollHeight) {
      
      this.isScrolling = this.infiniteLoader = true;
      this.page += 1; // Increment the course page

      this.getAlbums(this.page);
    }
  }

}
