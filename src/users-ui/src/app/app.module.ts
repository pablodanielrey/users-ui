import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ImageCropperModule} from 'ng2-img-cropper/index';



import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { OidpGuard } from './oauth2/oidp.guard';

import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { AppRoutingModule } from './/app-routing.module';
import { SistemaComponent } from './sistema/sistema.component';
import { MyMaterialModule } from './material.module';
import { DialogoModificarFotoComponent } from './dialogo-modificar-foto/dialogo-modificar-foto.component';

import { ErrorComponent } from './error/error.component';
import { Oauth2Service } from './oauth2/oauth2.service';
import { Oauth2Component } from './oauth2/oauth2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { AgregarcorreoComponent } from './sistema/agregarcorreo/agregarcorreo.component';
import { CambiarclaveComponent } from './sistema/cambiarclave/cambiarclave.component';
import { ChequeosComponent } from './sistema/chequeos/chequeos.component';
import { ClaveTemporalComponent } from './sistema/chequeos/clave-temporal/clave-temporal.component';
import { SinCorreoComponent } from './sistema/chequeos/sin-correo/sin-correo.component';
import { IngresarCorreoComponent } from './sistema/agregarcorreo/ingresar-correo/ingresar-correo.component';
import { IngresarCodigoComponent } from './sistema/agregarcorreo/ingresar-codigo/ingresar-codigo.component';
import { CorreoConfirmadoComponent } from './sistema/agregarcorreo/correo-confirmado/correo-confirmado.component';
import { IngresarClaveComponent } from './sistema/cambiarclave/ingresar-clave/ingresar-clave.component';
import { ClaveModificadaComponent } from './sistema/cambiarclave/clave-modificada/clave-modificada.component';
import { DisableCopyPasteDirective } from './directives/disable-copy-paste.directive';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    Oauth2Component,
    LoaderComponent,
    FooterComponent,
    HeaderComponent,
    PantallaPrincipalComponent,
    SistemaComponent,
    DialogoModificarFotoComponent,
    AgregarcorreoComponent,
    CambiarclaveComponent,
    ChequeosComponent,
    ClaveTemporalComponent,
    SinCorreoComponent,
    IngresarCorreoComponent,
    IngresarCodigoComponent,
    CorreoConfirmadoComponent,
    IngresarClaveComponent,
    ClaveModificadaComponent,
    DisableCopyPasteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MyMaterialModule,
    ImageCropperModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http'],
        sendAccessToken: true
      }
    })
  ],
  entryComponents: [DialogoModificarFotoComponent],
  providers: [
    UsersService,
    Oauth2Service,
    OidpGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
