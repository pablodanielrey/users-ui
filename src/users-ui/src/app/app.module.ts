import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';


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
import { Oauth2Component } from './oauth2/oauth2.component';

@NgModule({
  declarations: [
    AppComponent,
    Oauth2Component,
    LoaderComponent,
    FooterComponent,
    HeaderComponent,
    PantallaPrincipalComponent,
    SistemaComponent,
    ImageCropperComponent,
    DialogoModificarFotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MyMaterialModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http'],
        sendAccessToken: true
      }
    })
  ],
  entryComponents: [DialogoModificarFotoComponent],
  providers: [
    OidpGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
