import { Component, OnInit } from '@angular/core';
import { CarService } from '../cars.service';
import { Router } from '@angular/router';
import { ListCarModel } from '../model/listCars.model';
import { Observable } from 'rxjs';
import { AuthService } from '../../authForms/auth.service';

@Component({
  selector: 'app-list-all-cars',
  templateUrl: './list-all-cars.component.html',
  styleUrls: ['./list-all-cars.component.css']
})
export class ListAllCarsComponent implements OnInit {
  cars: Observable<ListCarModel[]>

  constructor(private carService: CarService,private authService: AuthService, private router: Router) { }



  ngOnInit() {
    this.cars = this.carService.getAllCars()
  }

}
