import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Measurment } from 'src/app/models/measurements.model';
import { MEASUREMENT_JPA_API_URL } from 'src/app/app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasurementDataService {

  constructor(private http:HttpClient) { }

  getAllMeasurements():Observable<Measurment[]>{
    return this.http.get<Measurment[]>(`${MEASUREMENT_JPA_API_URL}/measurement`);
  }

  saveMeasurement(measurement:any){
    return this.http.post<Measurment>(`${MEASUREMENT_JPA_API_URL}/measurement`, measurement)
  }

  updateMeasurement(measurement:any){
    return this.http.put<Measurment>(`${MEASUREMENT_JPA_API_URL}/measurement`,measurement)
  }

  
  
  
}
