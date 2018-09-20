import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiarclave',
  templateUrl: './cambiarclave.component.html',
  styleUrls: ['./cambiarclave.component.css']
})
export class CambiarclaveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/sistema/cambiar_clave/ingresar_clave']);
  }

}
