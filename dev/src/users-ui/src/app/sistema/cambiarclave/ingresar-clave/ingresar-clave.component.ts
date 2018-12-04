import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

import { LoginService } from '../../../login.service';

@Component({
  selector: 'app-ingresar-clave',
  templateUrl: './ingresar-clave.component.html',
  styleUrls: ['./ingresar-clave.component.css']
})
export class IngresarClaveComponent implements OnInit {

  hide: boolean = true;
  usuario_id : string = null;
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private service: LoginService) { 
    this.form = fb.group({
      clave1: ['',[Validators.required]],
      clave2: ['',[Validators.required]]
    }, {validator:this.validar_claves});
  }
  

  ngOnInit() {
    this.route.paramMap.subscribe( p => {
      this.usuario_id = p.get('uid');
    })
  }

  // validador global de todo el formulario.
  validar_claves(f:AbstractControl): null | ValidationErrors {
    console.log('validando correos');
    return f.value['clave1'] == f.value['clave2'] ? null : { claves: true }
  }

  aceptar() {
    if (!this.form.valid) {
      return;
    }
    let clave = this.form.value['clave1'];
    this.service.cambiar_clave(this.usuario_id, clave).subscribe(
      r => {
        this.router.navigate(['/sistema/cambiar_clave/clave_modificada']);
      },
      e => {
        this.form.setErrors({clave:true});
      }
    )
  }  

  volver() {
    this.router.navigate(['/']);
  }

}
