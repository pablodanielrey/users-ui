import { Component, OnInit } from '@angular/core';
//import { DialogoModificarFotoComponent } from '../dialogo-modificar-foto/dialogo-modificar-foto.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UsersService } from '../users.service'
import { OAuthService } from 'angular-oauth2-oidc'
import { Usuario } from '../entities/usuario'

import { FormBuilder, FormControl, Validators, FormGroup, FormArray } from '@angular/forms'; 

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  info: any;
  foto: any;
  formulario: FormGroup;
  nombre = new FormControl('', Validators.required);
  apellido = new FormControl('', Validators.required);
  dni = new FormControl('');
  legajo = new FormControl('');
  sexo = new FormControl('', Validators.required);
  correos: FormArray;


  opciones_sexo: string[] = ["Otro","masculino", "femenino"];

  usuario: Usuario = null;  
  subscriptions: any[] = [];
  //cambiarFotoDialogRef: MatDialogRef<DialogoModificarFotoComponent>;

  constructor(public dialog: MatDialog,
              private fb: FormBuilder, 
              private service: UsersService,
              private oauthService: OAuthService) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: this.nombre,
      apellido: this.apellido,
      dni: this.dni,
      legajo: this.legajo,
      sexo: this.sexo,
      correos: this.correos
    });
    
    this.dni.disable();
    this.legajo.disable();

    this.info = this.oauthService.getIdentityClaims();
    let userId = this.info.sub;
    this.subscriptions.push(this.service.obtenerUsuario(userId).subscribe(
      usuario => {
        console.log(usuario);
        this.usuario = usuario;
        this.nombre.setValue(usuario.nombre);
        this.apellido.setValue(usuario.apellido);
        this.dni.setValue(usuario.dni); 
        this.legajo.setValue(usuario.legajo);
        this.sexo.setValue(usuario.genero);
        this.correos.setValue(['emanuel@econo.unlp.edu.ar']);

        console.log(this.correos.value)
      },
      err => {
        console.log(err)
      }
    ));/*
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
    */
    console.log(this.info);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }


  cambiarFoto(): void {
/*
    this.cambiarFotoDialogRef = this.dialog.open(DialogoModificarFotoComponent);
    this.cambiarFotoDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.foto = result;
      }
    });
*/
  }

  guardar(): void {
    console.log("guardar");
    console.warn(this.formulario.value);
  }

}
