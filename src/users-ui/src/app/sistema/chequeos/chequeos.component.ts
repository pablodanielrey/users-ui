import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../users.service'
import { OAuthService } from 'angular-oauth2-oidc'

@Component({
  selector: 'app-chequeos',
  templateUrl: './chequeos.component.html',
  styleUrls: ['./chequeos.component.css']
})
export class ChequeosComponent implements OnInit {

  userId: string;
  subscriptions: any[] = [];

  constructor(private router: Router, 
              private service: UsersService,
              private oauthService: OAuthService) { }

  ngOnInit() {
    let info: any = this.oauthService.getIdentityClaims();
    this.userId = info.sub;
    this.subscriptions.push(this.service.precondiciones(this.userId).subscribe(
      pre => {
        if (!pre.clave) {
          this.router.navigate(['/sistema/chequeos/clave_temporal']);
          return;
        }

        if (!pre.correo) {
          this.router.navigate(['/sistema/chequeos/sin_correo']);
          return;
        }

        this.router.navigate(['/sistema/inicial']);
      },
      err => {
        console.log(err);
      } 

    ));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }  

}
