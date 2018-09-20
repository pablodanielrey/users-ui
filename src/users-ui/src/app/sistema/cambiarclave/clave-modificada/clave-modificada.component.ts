import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clave-modificada',
  templateUrl: './clave-modificada.component.html',
  styleUrls: ['./clave-modificada.component.css']
})
export class ClaveModificadaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  aceptar() {
    this.router.navigate(['/']);
  }
}
