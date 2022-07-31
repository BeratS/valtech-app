import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MyAlbumDetailComponent } from './my-album-detail/my-album-detail.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { MainComponent } from './view/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'my-albums',
    component: MyAlbumsComponent
  },
  {
    path: 'my-albums/:id',
    component: MyAlbumDetailComponent
  },
  {
    path: ':id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
