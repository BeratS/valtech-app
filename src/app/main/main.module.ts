import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './view/main.component';
import { MainRoutingModule } from './main-routing.module';
import { UiModule } from '../ui/ui.module';
import { DetailComponent } from './detail/detail.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { MyAlbumDetailComponent } from './my-album-detail/my-album-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    UiModule
  ],
  declarations: [
    MainComponent,
    DetailComponent,
    MyAlbumsComponent,
    MyAlbumDetailComponent
  ]
})
export class MainModule { }
