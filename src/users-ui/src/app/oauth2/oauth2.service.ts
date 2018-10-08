import { Injectable } from '@angular/core';
import { from, Subscription, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AuthConfig, OAuthService, NullValidationHandler, JwksValidationHandler, OAuthEvent, OAuthErrorEvent, OAuthInfoEvent } from 'angular-oauth2-oidc';

import { environment } from '../../environments/environment';

export const authConfig: AuthConfig = {
  issuer: environment.oidp_issuer,
  redirectUri: window.location.origin + '/oauth2',
  logoutUrl: environment.logoutUrl,
  oidc: true,
  requireHttps: false,
  clientId: 'users-ui',
  dummyClientSecret: 'users-ui',
  scope: 'openid profile email',
  sessionChecksEnabled: true,
  showDebugInformation: true
}

@Injectable({
  providedIn: 'root'
})
export class Oauth2Service {

  error: boolean = false;
  error_description: string = null;

  constructor(private oauthService: OAuthService) { 
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    
    // this.oauthService.events.pipe(filter((e1:OAuthEvent) => e1 instanceof OAuthErrorEvent)).subscribe((err:OAuthErrorEvent) => {
    //   if (err.params['error'] == 'unknown_user') {
    //     console.log('erro usuario clave');
    //   }
    //   this.error = true;
    //   this.error_description = err.params['error'];
    // });
    
    this.oauthService.loadDiscoveryDocument().then(() => {
      console.log('documento cargado');
    });

  }

  loadTokens() {
    let p = new Promise((res, rej) => {
      this.oauthService.loadDiscoveryDocument().then(() => {
        this.oauthService.tryLogin().then(() => {
          console.log('tryLogin ok');
          this.error = false;
          this.error_description = null;
          res();
        },
        (err) => {
          console.log('tryLogin error');
          this.error = true;
          this.error_description = err.params['error'];
          res();
        });
      })
    });
    return from(p);
  }

  hasError():boolean {
    return this.error;
  }

  getError(): string {
    return this.error_description;
  }

  login() {
    this.oauthService.loadDiscoveryDocument().then(() => {
      if (!this.oauthService.hasValidAccessToken()) {
        this.oauthService.initImplicitFlow();
      }
    });
  }

  hasValidToken() {
    return this.oauthService.hasValidAccessToken();
  }

  logout() {
    this.oauthService.logOut(true);
  }

  getId() {
    let c = this.oauthService.getIdentityClaims();
    return c['sub'];
  }

  getPrimaryEmail() {
    let c = this.oauthService.getIdentityClaims();
    if (c['email_verified']) {
      return c['email'];
    } else {
      return null;
    }
    
  }

  getNames() {
    return {
      
    };
  }

}
