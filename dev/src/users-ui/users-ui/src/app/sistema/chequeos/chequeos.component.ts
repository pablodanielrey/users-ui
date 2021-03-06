import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import { forkJoin } from 'rxjs';

import { OAuthService } from 'angular-oauth2-oidc';

import { UsersService } from '../../users.service'
import { LoginService } from '../../login.service';


@Component({
  selector: 'app-chequeos',
  templateUrl: './chequeos.component.html',
  styleUrls: ['./chequeos.component.css']
})
export class ChequeosComponent implements OnInit {

  subscriptions: any[] = [];

  constructor(@Inject(DOCUMENT) private document: any,
              private router: Router, 
              private userService: UsersService,
              private loginService: LoginService,
              private oauthService: OAuthService) { }

  ngOnInit() {

    this.subscriptions.push(
      forkJoin(this.userService.precondiciones(), this.loginService.precondiciones()).subscribe(
        ([pu, pl]) => {
          if (!pu.correo) {
            this.router.navigate(['/sistema/chequeos/sin_correo']);
            return;
          }
          if (!pl.clave) {
            this.router.navigate(['/sistema/chequeos/clave_temporal']);  
            return;
          }
          this.router.navigate(['/sistema/inicial']);
          // this.document.location.href = 'https://www.au24.econo.unlp.edu.ar';
        }
      )
    );
  
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }  

}
