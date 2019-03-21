import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CarModel } from './model/car.model';


const baseUrl = "https://ng-cars.firebaseio.com/cars"

@Injectable({
    providedIn: 'root'
})
export class CarService {
    constructor(private http: HttpClient) {}

    getAllCars() {
        return this.http
    }

    createCar(model: CarModel) {
        return this.http.post(`${baseUrl}.json`, model)
    }
}