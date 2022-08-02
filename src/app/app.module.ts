import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarImagesComponent } from './components/car-image/car-images.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarUptadeComponent } from './components/updateComponents/car-uptade/car-uptade.component';

//birbiri ile ilişkili componentleri topladığımız yer.

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CarImagesComponent,
    CustomerComponent,
    RentalComponent,
    UserComponent,
    CarDetailComponent,
    RentalDetailComponent,
    FilterBrandPipe,
    FilterPipePipe,
    FilterColorPipe,
    CartSummaryComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarUptadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
