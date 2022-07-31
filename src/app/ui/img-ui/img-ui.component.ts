import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { IAlbums } from 'src/app/models/config';

@Component({
  selector: 'app-img-ui',
  templateUrl: './img-ui.component.html',
  styleUrls: ['./img-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgUiComponent {

  @Input() item!: IAlbums | undefined;

  hideOverlay = false;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  loaded() {
    this.hideOverlay = true;
    this.cdr.markForCheck();
  }

}
