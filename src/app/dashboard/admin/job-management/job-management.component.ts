import { Component, OnInit } from '@angular/core';
import {Car} from './../../../core/models/car';
import {DummyDataService} from './../../../core/services/common/dummy-data.service';

@Component({
  selector: 'app-job-management',
  templateUrl: './job-management.component.html',
  styleUrls: ['./job-management.component.css']
})
export class JobManagementComponent implements OnInit {

  cars: Car[];

  constructor(private dummyDataService: DummyDataService) {
   }

  ngOnInit() {
    // get All Cars
    this.cars = this.dummyDataService.getAllCars();
  }

}
