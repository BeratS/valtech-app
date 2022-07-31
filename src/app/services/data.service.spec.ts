/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('Service: Data', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [DataService]
    });

    service = TestBed.inject(DataService);
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });
});
