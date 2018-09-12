import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info: any;

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
    this.info = this.oauthService.getIdentityClaims();
  }

  salir():void {
    this.oauthService.logOut();
  }

}
