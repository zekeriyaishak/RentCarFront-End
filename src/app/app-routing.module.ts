import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { CarUptadeComponent } from './components/updateComponents/car-uptade/car-uptade.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"", component:CarComponent}, //herhangi bir şey verilmezse
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"Cars/add",component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"Brands/add",component:BrandAddComponent},
  {path:"Colors/add",component:ColorAddComponent},
  {path:"login",component:LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "cars/carDetails/:carId", component: CarDetailComponent },
  {path:"Cars/uptade",component:CarUptadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
