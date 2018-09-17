import { Component, OnInit } from '@angular/core';
import { DialogoModificarFotoComponent } from '../dialogo-modificar-foto/dialogo-modificar-foto.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  foto: any;
  cambiarFotoDialogRef: MatDialogRef<DialogoModificarFotoComponent>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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
