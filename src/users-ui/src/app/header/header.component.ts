import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info: any;

  constructor(private router: Router, private oauthService: OAuthService) { }

  ngOnInit() {
    this.info = this.oauthService.getIdentityClaims();
  }

  salir():void {
    this.oauthService.logOut();
  }

  cambiar_clave() {
    this.router.navigate(['/sistema/cambiar_clave']);
  }

}
