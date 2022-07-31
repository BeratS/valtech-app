/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAlbumDetailComponent } from './my-album-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipePipe } from 'src/app/ui/date-pipe/date-pipe.pipe';
import { MyAlbumsService } from 'src/app/services/my-albums.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyAlbumDetailComponent', () => {
  let component: MyAlbumDetailComponent;
  let fixture: ComponentFixture<MyAlbumDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        MyAlbumDetailComponent,
        DatePipePipe
      ],
      providers: [
        MyAlbumsService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAlbumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
