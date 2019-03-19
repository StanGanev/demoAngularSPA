import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authForms/login/login.component';
import { RegisterComponent } from './components/authForms/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListAllCarsComponent } from './components/cars/list-all-cars/list-all-cars.component';
import { CreateCarComponent } from './components/cars/create-car/create-car.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'index', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'cars', children: [
      { path: '', pathMatch: 'full', component: ListAllCarsComponent },
      { path: 'listAll', component: ListAllCarsComponent },
      { path: 'create', component: CreateCarComponent }
    ], canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
