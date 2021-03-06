import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';

import { Oauth2Component } from './oauth2/oauth2.component';
import { OidpGuard } from './oauth2/oidp.guard';
import { SistemaComponent } from './sistema/sistema.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';

import { LoaderComponent } from './loader/loader.component';

import { AgregarcorreoComponent } from './sistema/agregarcorreo/agregarcorreo.component';
import { IngresarCorreoComponent } from './sistema/agregarcorreo/ingresar-correo/ingresar-correo.component';
import { IngresarCodigoComponent } from './sistema/agregarcorreo/ingresar-codigo/ingresar-codigo.component';
import { CorreoConfirmadoComponent } from './sistema/agregarcorreo/correo-confirmado/correo-confirmado.component';

import { CambiarclaveComponent } from './sistema/cambiarclave/cambiarclave.component';
import { IngresarClaveComponent } from './sistema/cambiarclave/ingresar-clave/ingresar-clave.component';
import { ClaveModificadaComponent } from './sistema/cambiarclave/clave-modificada/clave-modificada.component';

import { ChequeosComponent } from './sistema/chequeos/chequeos.component';
import { ClaveTemporalComponent } from './sistema/chequeos/clave-temporal/clave-temporal.component';
import { SinCorreoComponent } from './sistema/chequeos/sin-correo/sin-correo.component';

const routes: Routes = [
  { path: 'error/:error', component: ErrorComponent },
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
        children: [
          { path: 'ingresar_correo/:uid', component: IngresarCorreoComponent },
          { path: 'ingresar_codigo/:uid/:cid', component: IngresarCodigoComponent },
          { path: 'correo_confirmado', component: CorreoConfirmadoComponent }
        ]
      },
      {
        path: 'cambiar_clave',
        component: CambiarclaveComponent,
        children: [
          { path: 'ingresar_clave/:uid', component: IngresarClaveComponent},
          { path: 'clave_modificada', component: ClaveModificadaComponent }
        ]
      },
      {
        path: 'chequeos',
        component: ChequeosComponent,
        children: [
          { path: 'sin_correo', component: SinCorreoComponent },
          { path: 'clave_temporal', component: ClaveTemporalComponent }
        ]
      }
    ]
  },
  { path: '**', redirectTo: '/sistema/chequeos', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
