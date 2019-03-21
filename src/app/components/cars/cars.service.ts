import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel } from './model/car.model';
import { ListCarModel } from './model/listCars.model'
import { map } from 'rxjs/operators';


const baseUrl = "https://ng-cars.firebaseio.com/cars"

@Injectable({
    providedIn: 'root'
})
export class CarService {
    constructor(private http: HttpClient) { }

    getAllCars() {
        return this.http.get(`${baseUrl}.json`)
            .pipe(map((res: Response) => {
                console.log(res)
                const ids = Object.keys(res);
                console.log(ids);
                
                const cars: ListCarModel[] = [];
                for (let i of ids) {
                    console.log(i);
                    
                    cars.push(new ListCarModel(i, res[i].title,
                        res[i].description, res[i].brand, res[i].model,
                        res[i].year, res[i].imageUrl, res[i].fuelType,
                        res[i].price, res[i].sellerId));

                } 
                
                return cars; 
            }))
    }


createCar(model: CarModel) {
    return this.http.post(`${baseUrl}.json`, model)
}
}