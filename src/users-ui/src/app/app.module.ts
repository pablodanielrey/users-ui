import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { AppRoutingModule } from './/app-routing.module';
import { SistemaComponent } from './sistema/sistema.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    FooterComponent,
    HeaderComponent,
    PantallaPrincipalComponent,
    SistemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
