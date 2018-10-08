import { Component, OnInit } from '@angular/core';
//import { DialogoModificarFotoComponent } from '../dialogo-modificar-foto/dialogo-modificar-foto.component';
import { forkJoin } from 'rxjs';

import { MatDialog, MatDialogRef } from '@angular/material';
import { UsersService } from '../users.service'
import { Oauth2Service } from '../oauth2/oauth2.service';
import { Usuario, Mail, Telefono } from '../entities/usuario'
import { Router } from '@angular/router';

import { FormBuilder, FormControl, Validators, FormGroup, FormArray, AbstractControl } from '@angular/forms'; 

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})

export class PantallaPrincipalComponent implements OnInit {

  foto: any;
  procesando: boolean = true;
  procesandoCorreo: boolean = true;
  userId: string;
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
  nacimiento = new FormControl('');

  opciones_sexo: string[] = ["Otro","masculino", "femenino"];

  usuario: Usuario = null;  
  subscriptions: any[] = [];
  //cambiarFotoDialogRef: MatDialogRef<DialogoModificarFotoComponent>;

  constructor(public dialog: MatDialog,
              private fb: FormBuilder, 
              private router: Router,
              private service: UsersService,
              private oauthService: Oauth2Service) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: this.nombre,
      apellido: this.apellido,
      dni: this.dni,
      legajo: this.legajo,
      genero: this.sexo,
      correos: this.correos,
      pais: this.pais,
      ciudad: this.ciudad,
      direccion: this.direccion,
      telefonoFijo: this.telefonoFijo,
      telefonoMovil: this.telefonoMovil,
      nacimiento: this.nacimiento
    });
    
    //this.info = this.oauthService.getIdentityClaims();
    this.userId = this.oauthService.getId();
    this.subscriptions.push(
      forkJoin(
        this.service.obtenerUsuario(this.userId),
        this.service.obtenerCorreos(this.userId)
      ).subscribe(
      datos => {
        let usuario = datos[0];
        let correos = datos[1];
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
        this._procesarCorreos(correos);
        this._parsearTelefonos(usuario.telefonos);   
        let date = ('nacimiento' in usuario && usuario.nacimiento) ? new Date(usuario.nacimiento): new Date();
        this.nacimiento.setValue(date);
      },
      err => {
        console.log(err)
        this.procesando = false;
      }, 
      () => {
        this.procesando = false;
      }
    ));

    this.subscriptions.push(this.service.obtenerAvatar(this.userId).subscribe(
      data => {
        this.foto = data;
      },
      err => {
        console.log(err);
      }
    ));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }

  _procesarCorreos(correos) {    
    let items = this.formulario.get('correos') as FormArray;
    for (let i = 0; i < correos.length; i++) {
      items.push(this.fb.group({
        email: {value: correos[i].email, disabled: true},
        id: correos[i].id,
        eliminable: !correos[i].esInstitucional()
      }));   
    } 
    this.procesandoCorreo = false; 
    this.procesando = this.procesando && this.procesandoCorreo;                
  }

  _parsearTelefonos(telefonos:Array<Telefono>): void {
    telefonos.forEach(t => {
      if (t.tipo == Telefono.tipoFijo) {
        this.telefonoFijo.setValue(t.numero);
      } 
      if (t.tipo == Telefono.tipoMovil) {
        this.telefonoMovil.setValue(t.numero);
      }
      
    });
  }

  agregarCorreo(): void {
    this.router.navigate(['/sistema/agregar_correo']);
  }

  cambiarPassword(): void {
    this.router.navigate(['/sistema/cambiar_clave']);
  }



  eliminable(i: number): boolean {
    let items = this.formulario.get('correos') as FormArray;
    return (items.controls[i] as FormGroup).controls.eliminable.value;
  }

  correosControls(): AbstractControl[] {
    return (this.formulario.get('correos') as FormArray).controls;
  }

  eliminarCorreo(i: number): void {
    let uid = this.usuario.id;
    let items = this.formulario.get('correos') as FormArray;
    let cid = (items.controls[i] as FormGroup).controls.id.value;
    this.procesando = true;
    this.subscriptions.push(this.service.eliminarCorreo(uid, cid).subscribe (
      cid => {
        items.removeAt(i);
        this.procesando = false;
      },
      err => {
        console.log(err);
        this.procesando = false;        
      }
    ));
  }


  cambiarFoto(): void {
/*
    this.cambiarFotoDialogRef = this.dialog.open(DialogoModificarFotoComponent);
    this.cambiarFotoDialogRef.afterClosed().subscribe(result => {      
      if (result) {

        this.procesando = true;
        this.subscriptions.push(this.service.actualizarAvatar(this.userId, result).subscribe(
          f => {
            this.foto = f;
            this.procesando = false;
          },
          err => {
            console.log(err);
            this.procesando = false;
          }
        ))        
      }
    });
*/
  }

  guardar(): void {
    if (!this.formulario.valid) {
      return;
    }    
    this.procesando = true;
    console.log(this.formulario.value);
    this.subscriptions.push(this.service.actualizarUsuario(this.userId, this.formulario.value).subscribe (
      data => {
        console.log(data);
        this.procesando = false;
        
      },
      err => {
        console.log(err);
        this.procesando = false;
      }
    ))
  }

}
