import { Component } from '@angular/core';
import { AlertService } from './ui/alert/service/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    public alert: AlertService
  ) {}
}
