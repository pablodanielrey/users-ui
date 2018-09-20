import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correo-confirmado',
  templateUrl: './correo-confirmado.component.html',
  styleUrls: ['./correo-confirmado.component.css']
})
export class CorreoConfirmadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  aceptar() {
    this.router.navigate(['/']);
  }

}
