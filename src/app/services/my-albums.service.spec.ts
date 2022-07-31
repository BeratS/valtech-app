/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyAlbumsService } from './my-albums.service';

describe('Service: MyAlbums', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAlbumsService]
    });
  });

  it('should ...', inject([MyAlbumsService], (service: MyAlbumsService) => {
    expect(service).toBeTruthy();
  }));
});
