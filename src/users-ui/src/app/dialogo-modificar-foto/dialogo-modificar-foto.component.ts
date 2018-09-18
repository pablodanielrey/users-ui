import { Component, Inject , ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';

@Component({
  selector: 'dialogo-modificar-foto',
  templateUrl: './dialogo-modificar-foto.component.html',
  styleUrls: ['./dialogo-modificar-foto.component.css']
})
export class DialogoModificarFotoComponent  implements OnInit {
  data1:any;
  cropperSettings1:CropperSettings;
  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;

  constructor(
    public dialogRef: MatDialogRef<DialogoModificarFotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.cropperSettings1 = new CropperSettings();
    this.cropperSettings1.width = 200;
    this.cropperSettings1.height = 200;

    this.cropperSettings1.croppedWidth = 200;
    this.cropperSettings1.croppedHeight = 200;

    this.cropperSettings1.canvasWidth = 500;
    this.cropperSettings1.canvasHeight = 300;

    this.cropperSettings1.minWidth = 100;
    this.cropperSettings1.minHeight = 100;

    this.cropperSettings1.rounded = false;

    this.cropperSettings1.noFileInput = false;

    this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

    this.data1 = {};
  }

  cropped(bounds:Bounds) {
      // console.log(bounds);
  }

}
