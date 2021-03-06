import { Component, OnInit } from '@angular/core';
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
export class ListMyCarsComponent implements OnInit {
  cars: Observable<ListCarModel[]>
  userId: string

  constructor(private carService: CarService, private authService: AuthService,
    private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

    ngOnInit() {
      this.init()
    }
  
    deleteFunc(id) {
      this.carService.deleteCar(id).subscribe((data) => {
        this.toastr.success('Car deleted!', 'Success')
        this.router.navigate(['cars']);
        this.init();
      });
    }

    private init() {
      this.userId = this.authService.getUserId();
      this.cars = this.carService.getAllCars()
    }

}
