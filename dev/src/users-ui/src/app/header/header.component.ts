import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Oauth2Service } from '../oauth2/oauth2.service';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, 
              private oauthService: Oauth2Service,
              private update: UpdateService) { }

  ngOnInit() {

  }

  salir():void {
    this.oauthService.logout().subscribe(
      r => {
        console.log(r);
        this.router.navigate(['/loader']);
      },
      e => {
        console.log(e);
        this.router.navigate(['/loader']);
      }
    );
  }

  cambiar_clave() {
    this.router.navigate(['/sistema/cambiar_clave']);
  }

  chequear_actualizaciones() {
    this.update.checkForUpdate();
  }

}
