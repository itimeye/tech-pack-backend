import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Measurment } from 'src/app/models/measurements.model';

@Component({
  selector: 'app-measurement-dialog',
  templateUrl: './measurement-dialog.component.html',
  styleUrls: ['./measurement-dialog.component.css']
})
export class MeasurementDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MeasurementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public measurement: Measurment
    ) { }

  ngOnInit(): void {
  }

  saveMeasurement(){}

  closeMeasurementDialog():void {
    this.dialogRef.close();
  }

}
