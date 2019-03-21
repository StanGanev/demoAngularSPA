import { Component, OnInit } from '@angular/core';
import { CarModel } from '../model/car.model';
import { CarService } from '../cars.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  car: CarModel

  constructor(private carsService: CarService, private toastr: ToastrService, private router: Router) {
    this.car = new CarModel('', '', '', '', 0, '', '', 0, null)
  }

  ngOnInit() {
  }

  createFunc() {
    this.carsService.createCar(this.car)
      .subscribe(() => {
        this.toastr.success('Car Listed!','Success');
        this.router.navigate(['/cars/listAll'])
      })
  }

}
