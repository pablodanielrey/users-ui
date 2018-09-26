import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

import { UsersService } from '../../../users.service';

@Component({
  selector: 'app-ingresar-codigo',
  templateUrl: './ingresar-codigo.component.html',
  styleUrls: ['./ingresar-codigo.component.css']
})
export class IngresarCodigoComponent implements OnInit {

  usuario_id: string = null;
  correo_id: string = null;
  form: FormGroup;

  constructor(private fb:FormBuilder, private router: Router, private route: ActivatedRoute, private service: UsersService) { 
    this.form = fb.group({
     codigo:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.usuario_id = p.get('uid');
      this.correo_id = p.get('cid');
    });
  }

  verificar_codigo() {
    if (!this.form.valid || this.usuario_id == null || this.correo_id == null) {
      return;
    }
    let codigo = this.form.value['codigo'];
    this.service.confirmarCorreo(this.usuario_id, this.correo_id, codigo).subscribe(
      r => {
        this.router.navigate(['/sistema/agregar_correo/correo_confirmado']);
      },
      e => {
        this.form.setErrors({servidor:true});
      }
    );
    
  }

}
