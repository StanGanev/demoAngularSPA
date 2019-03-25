import { PipeTransform, Pipe } from '@angular/core';
import { ListCarModel } from '../../components/cars/model/listCars.model';

@Pipe({
    name: 'filter'
})

export class CarFilterPipe implements PipeTransform {
    transform(cars: ListCarModel[], filterOption: string) {
        if (!cars || !filterOption) {
            return cars;
        }

        return cars.filter( car => car.sellerId === filterOption);
    }
}