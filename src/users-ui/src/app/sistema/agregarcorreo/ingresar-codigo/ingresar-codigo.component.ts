import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-codigo',
  templateUrl: './ingresar-codigo.component.html',
  styleUrls: ['./ingresar-codigo.component.css']
})
export class IngresarCodigoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  aceptar() {
    this.router.navigate(['/sistema/agregar_correo/correo_confirmado']);
  }

}
