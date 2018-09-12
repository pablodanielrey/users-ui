import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OidpGuard } from './oidp.guard';
import { SistemaComponent } from './sistema/sistema.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';

import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  { path: 'loader', component: LoaderComponent},
  {
    path: 'sistema',
    component: SistemaComponent,
    // canActivate: [OidpGuard],
    children: [
      { path: 'inicial', component: PantallaPrincipalComponent }
    ]
  }
  //{ path: '**', redirectTo: '/sistema/inicial', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
