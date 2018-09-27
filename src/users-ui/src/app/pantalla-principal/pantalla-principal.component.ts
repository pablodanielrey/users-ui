import { Component, OnInit } from '@angular/core';
import { DialogoModificarFotoComponent } from '../dialogo-modificar-foto/dialogo-modificar-foto.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UsersService } from '../users.service'
import { OAuthService } from 'angular-oauth2-oidc'
import { Usuario, Mail, Telefono } from '../entities/usuario'
import { Router } from '@angular/router';

import { FormBuilder, FormControl, Validators, FormGroup, FormArray, AbstractControl } from '@angular/forms'; 

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
  dni = new FormControl({value:'', disabled: true});
  legajo = new FormControl({value:'', disabled: true});
  sexo = new FormControl('', Validators.required);
  correos: FormArray = new FormArray([]);
  pais = new FormControl('');
  ciudad = new FormControl('');
  direccion = new FormControl('');
  telefonoMovil = new FormControl('');
  telefonoFijo = new FormControl('');

  opciones_sexo: string[] = ["Otro","masculino", "femenino"];

  usuario: Usuario = null;  
  subscriptions: any[] = [];
  cambiarFotoDialogRef: MatDialogRef<DialogoModificarFotoComponent>;

  constructor(public dialog: MatDialog,
              private fb: FormBuilder, 
              private router: Router,
              private service: UsersService,
              private oauthService: OAuthService) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: this.nombre,
      apellido: this.apellido,
      dni: this.dni,
      legajo: this.legajo,
      sexo: this.sexo,
      correos: this.correos,
      pais: this.pais,
      ciudad: this.ciudad,
      direccion: this.direccion,
      telefonoFijo: this.telefonoFijo,
      telefonoMovil: this.telefonoMovil
    });
    
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
        this.direccion.setValue(usuario.direccion);
        this.ciudad.setValue(usuario.ciudad);
        this.pais.setValue(usuario.pais);
        this.obtenerCorreos(userId);
        this._parsearTelefonos(usuario.telefonos);                
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
    */
    console.log(this.info);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }

  _parsearTelefonos(telefonos:Array<Telefono>): void {
    telefonos.forEach(t => {
      if (t.tipo == Telefono.tipoFijo) {
        this.telefonoFijo.setValue(t.nro);
      } 
      if (t.tipo == Telefono.tipoMovil) {
        this.telefonoMovil.setValue(t.nro);
      }
      
    });
  }

  agregarCorreo(): void {
    this.router.navigate(['/sistema/agregar_correo']);
  }

  cambiarPassword(): void {
    this.router.navigate(['/sistema/cambiar_clave']);
  }

  obtenerCorreos(uid) {
    this.subscriptions.push(this.service.obtenerCorreos(uid).subscribe(
      correos => {
        let items = this.formulario.get('correos') as FormArray;
        for (let i = 0; i < correos.length; i++) {
          items.push(this.fb.group({
            email: {value: correos[i].email, disabled: true},
            id: correos[i].id,
            eliminable: !correos[i].esInstitucional()
          }));     
        }        
      },
      err => {
        console.log(err);
      }
    ));    
  }

  eliminable(i: number): boolean {
    let items = this.formulario.get('correos') as FormArray;
    return (items.controls[i] as FormGroup).controls.eliminable.value;
  }

  correosControls(): AbstractControl[] {
    return (this.formulario.get('correos') as FormArray).controls;
  }

  eliminarCorreo(i: number): void {
    let items = this.formulario.get('correos') as FormArray;
    let id = (items.controls[i] as FormGroup).controls.id.value;
    this.subscriptions.push(this.service.eliminarCorreo(id).subscribe (
      cid => {
        items.removeAt(i);
      },
      err => {
        console.log(err);
      }
    ));
  }

  cambiarFoto(): void {
    this.cambiarFotoDialogRef = this.dialog.open(DialogoModificarFotoComponent);
    this.cambiarFotoDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.foto = result;
      }
    });
  }

  guardar(): void {
    console.log("guardar");
    console.warn(this.formulario.value);
  }

}
