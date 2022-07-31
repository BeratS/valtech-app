import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../services/user.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthGuard,
        UserService
      ]
    }).compileComponents();

    guard = TestBed.inject(AuthGuard);
  });
  
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

});
