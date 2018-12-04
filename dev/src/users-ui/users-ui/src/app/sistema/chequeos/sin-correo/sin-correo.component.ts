import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sin-correo',
  templateUrl: './sin-correo.component.html',
  styleUrls: ['./sin-correo.component.css']
})
export class SinCorreoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  aceptar() {
    this.router.navigate(['/sistema/agregar_correo']);
  }

}
