import { Component, OnInit, OnChanges } from '@angular/core';
import { CarService } from '../cars.service';
import { AuthService } from '../../authForms/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListCarModel } from '../model/listCars.model';

@Component({
  selector: 'app-list-my-cars',
  templateUrl: './list-my-cars.component.html',
  styleUrls: ['./list-my-cars.component.css']
})
export class ListMyCarsComponent implements OnInit, OnChanges {
  cars: Observable<ListCarModel[]>
  userId: string

  constructor(private carService: CarService, private authService: AuthService,
    private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

    ngOnInit() {
      this.userId = this.authService.getUserId();
      this.cars = this.carService.getAllCars()
    }
  
    ngOnChanges() {
      this.userId = this.authService.getUserId();
      this.cars = this.carService.getAllCars()
    }
  
    deleteFunc(id) {
      this.carService.deleteCar(id).subscribe((data) => {
        this.toastr.success('Car deleted!', 'Success')
        this.router.navigate(['cars']);
      });
    }

}
