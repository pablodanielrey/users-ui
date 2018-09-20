import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-correo',
  templateUrl: './ingresar-correo.component.html',
  styleUrls: ['./ingresar-correo.component.css']
})
export class IngresarCorreoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  aceptar() {
    this.router.navigate(['/sistema/agregar_correo/ingresar_codigo']);
  }

}
