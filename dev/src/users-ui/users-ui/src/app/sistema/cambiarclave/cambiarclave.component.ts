import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-cambiarclave',
  templateUrl: './cambiarclave.component.html',
  styleUrls: ['./cambiarclave.component.css']
})
export class CambiarclaveComponent implements OnInit {

  usuario_id: string = null;

  constructor(private router: Router, private auth: OAuthService) { }

  ngOnInit() {
    this.usuario_id = this.auth.getIdentityClaims()['sub'];
    this.router.navigate(['/sistema/cambiar_clave/ingresar_clave',this.usuario_id]);
  }

}
