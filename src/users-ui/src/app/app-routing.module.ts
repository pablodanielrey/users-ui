import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Oauth2Component } from './oauth2/oauth2.component';
import { OidpGuard } from './oauth2/oidp.guard';
import { SistemaComponent } from './sistema/sistema.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';

import { LoaderComponent } from './loader/loader.component';
import { AgregarcorreoComponent } from './sistema/agregarcorreo/agregarcorreo.component';
import { CambiarclaveComponent } from './sistema/cambiarclave/cambiarclave.component';

const routes: Routes = [
  { path: 'oauth2', component: Oauth2Component },
  { path: 'loader', component: LoaderComponent},
  {
    path: 'sistema',
    component: SistemaComponent,
    canActivate: [OidpGuard],
    children: [
      { path: 'inicial', component: PantallaPrincipalComponent },
      { 
        path: 'agregar_correo', 
        component: AgregarcorreoComponent,
        /*children: [
          { path: 'paso1' }
        ]*/
      },
      { path: 'cambiar_clave', component: CambiarclaveComponent },
    ]
  },
  { path: '**', redirectTo: '/sistema/inicial', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
