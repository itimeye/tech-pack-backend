import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Measurment } from 'src/app/models/measurements.model';
import { Pin } from "src/app/models/pin.model";
import { MeasurementDataService } from 'src/app/services/measurement/measurement-data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  // measurments = [
  //   {measurmentId: 1, measurmentLetter : 'A', measurmentIn : 16.39, measurmentCm: 41.6},
  //   {measurmentId: 2, measurmentLetter : 'B' , measurmentIn : 35.82, measurmentCm: 90.98},
  //   {measurmentId: 3, measurmentLetter : 'C', measurmentIn : 36.20, measurmentCm: 91.94}
  //   // new Measurment(1, 'A',16.39, 41.6),
  //   // new Measurment(2, 'B',35.82, 90.98),
  //   // new Measurment(3, 'C',36.20, 91.94)
  // ]

  

  measurementModel: Measurment = new Measurment;
  measurmentId: number = 0;
  measurments: Measurment[] = [];
  // measure: any;
  pinModel: Pin = new Pin;
  pinId: number = 0;
  pins: Pin[] = []
  


  constructor(
    private measurementService: MeasurementDataService,
  ) { }

  ngOnInit(): void {
    this.measurementService.getAllMeasurements().subscribe(
      (data)=>
      {
        this.measurments = data;
        for (let i = 0; i < this.measurments.length; i++) {
          this.measurementModel.measurmentId = this.measurments[i].measurmentId;
          console.log(data[i])
          
        }
        console.log(data)
        // this.measurementModel = data.forEach((element) =>{
        //   JSON.parse(JSON.stringify(element))as typeof element
        // })
      }
    )


  }
  

  createMeasurement(form:any){
    let newMeasurement = new Measurment();
    if (form.value.measurementType === 'in') {
      console.log(form.value.measurementType);
      console.log(form.value.measurementInput);
      newMeasurement.cm = (form.value.measurementInput)*2.54;
      newMeasurement.inches = form.value.measurementInput;     
    } else{
      console.log(form.value.measurementType);
      console.log(form.value.measurementInput);
      newMeasurement.cm = form.value.measurementInput;
      newMeasurement.inches = (form.value.measurementInput)/2.54;
    } 
    window.location.reload();
    this.measurementService.saveMeasurement(newMeasurement).subscribe(
      (data: Measurment) =>{
        data = newMeasurement;
        console.log(data);
      }
    )
    
  }

  updateMeasurement(form:any){
    console.log(form);
    console.log(form.measurmentId);
    console.log(form.inches);
    // this.measurementModel.cm = form.value.cm;
    // this.measurementModel.inches = form.value.inches;
    // let newMeasurement = new Measurment();
    // console.log(this.measurementModel)
    // console.log(this.measurementModel.measurmentId)
    // newMeasurement.measurmentId = this.selectedId(this.measurementModel);
    // if (this.measurementModel.cm != (this.measurementModel.inches)*2.54) {
    //   let arr:Array<number> = this.convertToCmInches(this.measurementModel.inches, this.measurementModel.cm);
    //   newMeasurement.cm = arr[1];
    //   newMeasurement.inches = this.measurementModel.inches;
    // }
    // if (this.measurementModel.inches != (this.measurementModel.cm)/2.54) {
    //   let arr:Array<number> = this.convertToCmInches(this.measurementModel.inches, this.measurementModel.cm);
    //   newMeasurement.inches = arr[0];
    //   newMeasurement.cm = this.measurementModel.cm;
    // }
    
    // console.log(this.measurementModel);
    // console.log(newMeasurement);
    // this.measurementService.updateMeasurement(newMeasurement).subscribe(
    //   (data:Measurment)=>{
    //     data = newMeasurement
    //     console.log(data);
    //   }
    // )
    // window.location.reload();
  }

  selectedId(measurement:Measurment):number{
    console.log(measurement.measurmentId);
    return measurement.measurmentId;
  }

  convertToCmInches(a:number, b:number):number[]{
    let inches = b/2.54;
    let cm = a*2.54;
    let arr:Array<number> = [inches,cm]
    return arr;
  }

}


