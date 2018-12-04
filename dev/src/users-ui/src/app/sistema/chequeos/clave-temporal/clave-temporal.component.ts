import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clave-temporal',
  templateUrl: './clave-temporal.component.html',
  styleUrls: ['./clave-temporal.component.css']
})
export class ClaveTemporalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  aceptar() {
    this.router.navigate(['/sistema/cambiar_clave']);
  }

}
