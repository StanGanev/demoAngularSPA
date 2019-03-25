import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authForms/login/login.component';
import { RegisterComponent } from './components/authForms/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListAllCarsComponent } from './components/cars/list-all-cars/list-all-cars.component';
import { CreateCarComponent } from './components/cars/create-car/create-car.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CarDetailsComponent } from './components/cars/car-details/car-details.component';
import { CarEditComponent } from './components/cars/car-edit/car-edit.component';
import { ListMyCarsComponent } from './components/cars/list-my-cars/list-my-cars.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'index', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'cars', children: [
      { path: '', pathMatch: 'full', component: ListAllCarsComponent },
      { path: 'listAll', component: ListAllCarsComponent },
      { path: 'listMy', component: ListMyCarsComponent },
      { path: 'create', component: CreateCarComponent },
      { path: 'details/:id', component: CarDetailsComponent },
      { path: 'edit/:id', component: CarEditComponent },
      { path: 'details/:id/edit', component: CarEditComponent }
    ], canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
