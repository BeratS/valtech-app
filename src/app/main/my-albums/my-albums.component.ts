import { Component } from '@angular/core';
import { MyAlbumsService } from 'src/app/services/my-albums.service';

@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.scss']
})
export class MyAlbumsComponent {

  myAlbums = this.myAlbumService.getMyAlbums();

  constructor(
    private myAlbumService: MyAlbumsService
  ) { }

}
