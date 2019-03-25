import { Component, OnInit } from '@angular/core';
import { ListCarModel } from '../model/listCars.model';
import { CarService } from '../cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../authForms/auth.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})

export class CarDetailsComponent implements OnInit {
  car: ListCarModel
  id: string

  constructor(private carService: CarService, private route: ActivatedRoute,
    private toastr: ToastrService,private authService: AuthService,private router: Router) {
    this.car = new ListCarModel('', '', '', '', '', 0, '', '', 0, '')
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.carService.getById(this.id).subscribe((data) => {
      this.car = data;
    })
  }

  deleteFunc() {
    this.carService.deleteCar(this.id).subscribe((data) => {
      this.toastr.success('Car deleted!', 'Success')
      this.router.navigate(['cars']);
  });
  }
}
