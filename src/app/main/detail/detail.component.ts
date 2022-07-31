import { Component, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlbums } from 'src/app/models/config';
import { DataService } from 'src/app/services/data.service';
import { MyAlbumsService } from 'src/app/services/my-albums.service';
import { AlbumDialogComponent } from 'src/app/ui/album-dialog/album-dialog.component';
import { AlertService } from 'src/app/ui/alert/service/alert.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id!: string;
  album!: IAlbums;

  constructor(
    private acRoute: ActivatedRoute,
    private service: DataService,
    private myAlbumService: MyAlbumsService,
    private alertService: AlertService,
    private viewContainerRef: ViewContainerRef
  ) {
    this.id = this.acRoute.snapshot.params['id'];
    const findAlbum = this.service.findAlbumById(this.id);
    if (findAlbum) {
      this.album = findAlbum;
    }
  }

  ngOnInit(): void {
    // If the album found
    if (this.album) { return; }
    // If not than make a call to backend
    this.service.getAlbumById(this.id)
      .subscribe(album => this.album = album);
    ;
  }

  createAlbum(): void {
    let componentRef: ComponentRef<AlbumDialogComponent> = this.viewContainerRef
          .createComponent(AlbumDialogComponent);

    componentRef.instance.compClose.subscribe((result: string) => {
      if (result) {
        this.myAlbumService.createAlbum(result, this.album.download_url);
        this.alertService.addAlert('You successfully created an album.');
      }
      componentRef.destroy();
    });
  }

  onDownload(): void {
    fetch(this.album?.download_url).then((response) => response.blob())
      .then(blob => this.downloadFile(URL.createObjectURL(blob)));
  }

  downloadFile(filePath: string): void {
    const a = (document.getElementById('download-img') as HTMLAnchorElement);
    a.href = filePath;
    // a.download = "download.jpg";
    a?.click();
  }

}
