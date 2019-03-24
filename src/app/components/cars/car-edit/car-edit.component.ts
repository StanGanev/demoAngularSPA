import { Component, OnInit } from '@angular/core';
import { CarModel } from '../model/car.model';
import { CarService } from '../cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  id: string;
  carModel: CarModel;

  constructor(private carService: CarService, private route: ActivatedRoute,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.carService.getById(this.id)
      .subscribe((data) => {
        this.carModel = data;
      })
  }

  editFunc() {
    let body = {
      [this.id]: {
        title: this.carModel.title,
        description: this.carModel.description,
        brand: this.carModel.brand,
        model: this.carModel.model,
        year: this.carModel.year,
        imageUrl: this.carModel.imageUrl,
        fuelType: this.carModel.fuelType,
        price: this.carModel.price,
        sellerId: this.carModel.sellerId,
      }
    }
    this.carService.editCar(body)
      .subscribe((data) => {
        this.toastr.success('Car Edited','Success');
        this.router.navigate(['/cars']);
      });
  }

}
