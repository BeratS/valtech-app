/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgUiComponent } from './img-ui.component';

describe('ImgUiComponent', () => {
  let component: ImgUiComponent;
  let fixture: ComponentFixture<ImgUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
