import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  show = false;
  message!: string;
  
  private timeout!: any;

  constructor() { }

  addAlert(message: string, duration = 3000): void {
    this.message = message;
    this.show = true;

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.show = false, duration);
  }

}
