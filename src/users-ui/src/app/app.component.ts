import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateService } from './update.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private router: Router, private update: UpdateService) {
    Notification.requestPermission();   
  }
}
