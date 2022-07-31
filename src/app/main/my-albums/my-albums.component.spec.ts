/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAlbumsService } from 'src/app/services/my-albums.service';

import { MyAlbumsComponent } from './my-albums.component';

describe('MyAlbumsComponent', () => {
  let component: MyAlbumsComponent;
  let fixture: ComponentFixture<MyAlbumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        MyAlbumsComponent
      ],
      providers: [
        MyAlbumsService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
