import { Component, OnInit } from '@angular/core';
import { Overview } from 'src/app/models/overview.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-overview-top',
  templateUrl: './overview-top.component.html',
  styleUrls: ['./overview-top.component.css']
})
export class OverviewTopComponent implements OnInit {

  overviewModel = new Overview('Brand Name','Title', 'Season', 'Category', 'Main Color', 'Main Fabric', 'S M L', 'Gender', new Date(Date()), 'Description');

  constructor() { }

  ngOnInit(): void {
    
  }

  saveOverview(){
    
  }

}
