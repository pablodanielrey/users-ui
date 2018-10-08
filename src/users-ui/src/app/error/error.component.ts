import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router, ActivatedRoute } from '@angular/router';
=======
import { ActivatedRoute } from '@angular/router';
>>>>>>> 9159cacf3fea2a1ed095d178b494504f086ae8bd


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  error = '';
  descripcion = '';

<<<<<<< HEAD
  constructor(private router: Router, private route: ActivatedRoute) { }
=======
  constructor(private route: ActivatedRoute) { }
>>>>>>> 9159cacf3fea2a1ed095d178b494504f086ae8bd

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      if (p.has('error')) {
        this.error = p.get('error');
      }
      if (p.has('error_description')) {
        this.descripcion = p.get('error_description');
      }
    });
<<<<<<< HEAD
 
  }

    esErrorDeUsuario():boolean {
      return this.error == 'unknown_user';
    }

    login() {
      this.router.navigate(['/oauth2']);
    }

=======
  }

>>>>>>> 9159cacf3fea2a1ed095d178b494504f086ae8bd
}
