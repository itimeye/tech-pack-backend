import { Inject, Injectable } from "@angular/core"
import { Measurment } from "./measurements.model";

@Injectable({
    providedIn: 'root'
  })
export class Pin{
    
    pinId!: number
    letter!: String
    pinTitle!: String
    pantoneColors!: String
    material!: String
    comment!: String
    measurment!: Measurment
    
}