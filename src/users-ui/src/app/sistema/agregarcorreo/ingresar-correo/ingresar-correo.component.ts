import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

import { UsersService } from '../../../users.service';

@Component({
  selector: 'app-ingresar-correo',
  templateUrl: './ingresar-correo.component.html',
  styleUrls: ['./ingresar-correo.component.css']
})
export class IngresarCorreoComponent implements OnInit {

  form: FormGroup;
  usuario_id: string = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private service: UsersService) { 

    this.route.paramMap.subscribe(p => {
      this.usuario_id = p.get('uid');
    });

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

  // validador global de todo el formulario.
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
    this.service.agregarCorreo(this.usuario_id, this.form.value['correo1']).subscribe(
      r => {
        this.router.navigate(['/sistema/agregar_correo/ingresar_codigo', this.usuario_id, r.cid]);
      },
      e => {
        this.form.setErrors({servidor:true});
      }
    );
    
  }

  limpiarError(err) {
    this.form.reset();
  }

}
