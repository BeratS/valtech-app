/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailComponent } from './detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/app/services/data.service';
import { MyAlbumsService } from 'src/app/services/my-albums.service';
import { AlertService } from 'src/app/ui/alert/service/alert.service';
import { DatePipePipe } from 'src/app/ui/date-pipe/date-pipe.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        DetailComponent,
        DatePipePipe
      ],
      providers: [
        DataService,
        MyAlbumsService,
        AlertService,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
