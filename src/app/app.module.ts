import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/authForms/login/login.component';
import { RegisterComponent } from './components/authForms/register/register.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ListAllCarsComponent } from './components/cars/list-all-cars/list-all-cars.component';
import { CarDetailsComponent } from './components/cars/car-details/car-details.component';
import { CarEditComponent } from './components/cars/car-edit/car-edit.component';
import { CreateCarComponent } from './components/cars/create-car/create-car.component';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ListMyCarsComponent } from './components/cars/list-my-cars/list-my-cars.component';
import { CarFilterPipe } from './core/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    FooterComponent,
    ListAllCarsComponent,
    CarDetailsComponent,
    CarEditComponent,
    CreateCarComponent,
    ListMyCarsComponent,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
