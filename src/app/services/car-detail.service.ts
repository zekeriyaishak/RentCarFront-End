import { Car } from 'src/app/models/car';
import { CarDetail } from './../models/carDetail';
import { BaseUrl } from './../models/constants/urls';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(BaseUrl +"Cars/getcardetails")
  }

  
}
