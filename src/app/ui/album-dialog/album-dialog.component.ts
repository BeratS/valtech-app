import { Component, EventEmitter, Output, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-album-dialog',
  templateUrl: './album-dialog.component.html',
  styleUrls: ['./album-dialog.component.scss']
})
export class AlbumDialogComponent {

  @Output() compClose = new EventEmitter<string>();

  nameCtrl = new FormControl();

  constructor() { }

}
