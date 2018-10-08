import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  error = '';
  descripcion = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      if (p.has('error')) {
        this.error = p.get('error');
      }
      if (p.has('error_description')) {
        this.descripcion = p.get('error_description');
      }
    });
  }

}
