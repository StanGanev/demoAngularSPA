import { Component, OnInit } from '@angular/core';
import { CarModel } from '../model/car.model';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  car: CarModel

  constructor() {
    this.car = new CarModel('', '', '', '', 0, '', '', 0, null)
  }

  ngOnInit() {
  }

}
