import { Component, OnInit } from '@angular/core';
import { CarService } from '../cars.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListCarModel } from '../model/listCars.model';
import { Observable } from 'rxjs';
import { AuthService } from '../../authForms/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-all-cars',
  templateUrl: './list-all-cars.component.html',
  styleUrls: ['./list-all-cars.component.css']
})
export class ListAllCarsComponent implements OnInit {
  cars: Observable<ListCarModel[]>

  constructor(private carService: CarService, private authService: AuthService,
    private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }



  ngOnInit() {
    this.cars = this.carService.getAllCars()
  }

  deleteFunc(id) {
    this.carService.deleteCar(id).subscribe((data) => {
      this.toastr.success('Car deleted!', 'Success')
      this.router.navigate(['cars']);
      this.ngOnInit();
    });
  }
}
