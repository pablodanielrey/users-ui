import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthService {

  constructor() { }

}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: OAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getAccessToken()}`
      }
    });
    return next.handle(request);
  }

}
