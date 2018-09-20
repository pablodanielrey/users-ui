import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-clave',
  templateUrl: './ingresar-clave.component.html',
  styleUrls: ['./ingresar-clave.component.css']
})
export class IngresarClaveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  aceptar() {
    this.router.navigate(['/sistema/cambiar_clave/clave_modificada']);
  }  

}
