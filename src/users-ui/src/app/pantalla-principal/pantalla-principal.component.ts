import { Component, OnInit } from '@angular/core';
import { DialogoModificarFotoComponent } from '../dialogo-modificar-foto/dialogo-modificar-foto.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UsersService } from '../users.service'
import { OAuthService } from 'angular-oauth2-oidc'
import { Usuario } from '../entities/usuario'

//import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  info: any;
  foto: any;
  //formulario: FormGroup;
  usuario: Usuario = null;
  subscriptions: any[] = [];
  cambiarFotoDialogRef: MatDialogRef<DialogoModificarFotoComponent>;

  constructor(
    public dialog: MatDialog,
    private service: UsersService,
    private oauthService: OAuthService) { }

  ngOnInit() {
    this.info = this.oauthService.getIdentityClaims();
    let userId = this.info.sub;
    this.subscriptions.push(this.service.obtenerUsuario(userId).subscribe(
      usuario => {
        this.usuario = usuario;
      },
      err => {
        console.log(err)
      }
    ));
    this.subscriptions.push(this.service.obtenerAvatar(userId).subscribe(
      data => {
        console.log("Avatar:" + data);
      },
      err => {
        console.log(err);
      }
    ));
    this.subscriptions.push(this.service.obtenerCorreos(userId).subscribe(
      data => {        
        console.log("Correos: "+ data);
      },
      err => {
        console.log(err);
      }
    ));
    console.log(this.info);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }

  cambiarFoto(): void {
    this.cambiarFotoDialogRef = this.dialog.open(DialogoModificarFotoComponent);
    this.cambiarFotoDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.foto = result;
      }
    });
  }

}
