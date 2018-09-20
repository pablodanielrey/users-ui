import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarcorreo',
  templateUrl: './agregarcorreo.component.html',
  styleUrls: ['./agregarcorreo.component.css']
})
export class AgregarcorreoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/sistema/agregar_correo/ingresar_correo']);
  }

}
