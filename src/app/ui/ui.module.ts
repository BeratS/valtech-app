import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AlbumDialogComponent } from './album-dialog/album-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { DatePipePipe } from './date-pipe/date-pipe.pipe';
import { ImgUiComponent } from './img-ui/img-ui.component';

const arrDec = [
  NavbarComponent,
  AlertComponent,
  AlbumDialogComponent,
  DatePipePipe,
  ImgUiComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: arrDec,
  exports: arrDec,
  providers: []
})
export class UiModule { }
