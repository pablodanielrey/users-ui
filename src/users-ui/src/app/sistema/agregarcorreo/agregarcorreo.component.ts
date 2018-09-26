import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-agregarcorreo',
  templateUrl: './agregarcorreo.component.html',
  styleUrls: ['./agregarcorreo.component.css']
})
export class AgregarcorreoComponent implements OnInit {

  usuario_id: string = null;

  constructor(private router: Router, private auth: OAuthService) { }

  ngOnInit() {
    this.usuario_id = this.auth.getIdentityClaims()['sub'];
    this.router.navigate(['/sistema/agregar_correo/ingresar_correo',this.usuario_id]);
  }

}
