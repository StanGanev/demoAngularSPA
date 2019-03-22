import { Component, OnInit } from '@angular/core';
import { ListCarModel } from '../model/listCars.model';
import { CarService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: ListCarModel
  id: string

  constructor(private carService: CarService, private route: ActivatedRoute) {
    this.car = new ListCarModel('', '', '', '','', 0, '', '', 0,'')
   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.carService.getById(this.id).subscribe((data) => {
      this.car = data;
      console.log(this.car);
    })
  }

}
