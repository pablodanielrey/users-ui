import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-ingresar-correo',
  templateUrl: './ingresar-correo.component.html',
  styleUrls: ['./ingresar-correo.component.css']
})
export class IngresarCorreoComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.form = fb.group({
      correo1: ['', [Validators.required, Validators.email]],
      correo2: ['', [Validators.required, Validators.email]]
    }, { validator:this.validar_correos });
    /*
    this.form.valueChanges.subscribe(f => {
      console.log(f);
      console.log(this.form.valid);
    });
    */
  }

  validar_correos(f:AbstractControl): null | ValidationErrors {
    console.log('validando correos');
    return f.value['correo1'] == f.value['correo2'] ? null : { correos: true }
  }

  ngOnInit() {
  }

  aceptar() {
    if (!this.form.valid) {
      console.log('formulario inválido');
      console.log(this.form);
      return;
    }
    this.router.navigate(['/sistema/agregar_correo/ingresar_codigo']);
  }

}
