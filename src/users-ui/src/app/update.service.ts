import { Injectable } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private update: SwUpdate, private push: SwPush) { 
    update.available.subscribe(event => {
      new Notification('Actualizando Aplicación');
      update.activateUpdate().then(() => document.location.reload());
    });
  }

}
