import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMyAlbums } from 'src/app/models/config';
import { MyAlbumsService } from 'src/app/services/my-albums.service';

@Component({
  selector: 'app-my-album-detail',
  templateUrl: './my-album-detail.component.html',
  styleUrls: ['./my-album-detail.component.scss']
})
export class MyAlbumDetailComponent {

  album!: IMyAlbums;

  constructor(
    private acRoute: ActivatedRoute,
    private myAlbumService: MyAlbumsService,
  ) {
    const id = +this.acRoute.snapshot.params['id'];

    this.album = this.myAlbumService.getAlbumById(id);
  }

}
