import { Component } from '@angular/core';
import { AlertService } from './service/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  constructor(
    public alert: AlertService
  ) { }

}
