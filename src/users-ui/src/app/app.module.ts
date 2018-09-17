import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { TokenInterceptor } from './auth.service';
import { OidpGuard } from './oidp.guard';

import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { AppRoutingModule } from './/app-routing.module';
import { SistemaComponent } from './sistema/sistema.component';
import { MyMaterialModule } from './material.module';
import { DialogoModificarFotoComponent } from './dialogo-modificar-foto/dialogo-modificar-foto.component';

@NgModule({
  declarations: [
    AppComponent,
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
    OAuthModule.forRoot()
  ],
  entryComponents: [DialogoModificarFotoComponent],
  providers: [
    OidpGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
