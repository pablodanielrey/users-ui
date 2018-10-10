import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Oauth2Service } from '../oauth2/oauth2.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private oauthService: Oauth2Service) { }

  ngOnInit() {

  }

  salir():void {
    this.oauthService.logout().subscribe(
      r => {
        console.log(r);
        this.router.navigate(['/']);
      },
      e => {
        console.log(e);
        this.router.navigate(['/']);
      }
    );
  }

  cambiar_clave() {
    this.router.navigate(['/sistema/cambiar_clave']);
  }

}
