import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chequeos',
  templateUrl: './chequeos.component.html',
  styleUrls: ['./chequeos.component.css']
})
export class ChequeosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //this.router.navigate(['./sin_correo']);
  }
  

}
