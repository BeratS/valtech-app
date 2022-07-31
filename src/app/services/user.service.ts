import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authSubc = new BehaviorSubject<boolean>(false);
  auth$ = this.authSubc.asObservable();

  constructor() { }

  // Update state of authentication
  setUserAuth(value: boolean): void {
    localStorage.setItem('AUTH', '1');
    this.authSubc.next(value);
  }

}
