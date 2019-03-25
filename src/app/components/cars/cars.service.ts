import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel } from './model/car.model';
import { ListCarModel } from './model/listCars.model'
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


const baseUrl = "https://ng-cars.firebaseio.com/cars"

@Injectable({
    providedIn: 'root'
})
export class CarService {
    gotCarsToShow: boolean

    constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

    getAllCars() {
        return this.http.get(`${baseUrl}.json`)
            .pipe(map((res: Response) => {
                if (res !== undefined && res !== null) {
                    const ids = Object.keys(res);
                    const cars: ListCarModel[] = [];
                    for (let i of ids) {

                        cars.push(new ListCarModel(i, res[i].title,
                            res[i].description, res[i].brand, res[i].model,
                            res[i].year, res[i].imageUrl, res[i].fuelType,
                            res[i].price, res[i].sellerId));
                    }
                    this.gotCarsToShow = true;
                    return cars;
                }

                this.gotCarsToShow = false;

            }))
    }

    createCar(model: CarModel) {
        return this.http.post(`${baseUrl}.json`, model)
    }

    getById(carId: string) {
        return this.http.get<ListCarModel>(`${baseUrl}/${carId}/.json`);
    }

    editCar(body) {
        return this.http.patch(`${baseUrl}.json`, body);
    }

    deleteCar(carId: string) {
        return this.http.delete(`${baseUrl}/${carId}/.json`)
    }

}