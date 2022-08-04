import { Car } from 'src/app/models/car';
import { CarDetail } from './../models/carDetail';
import { BaseUrl } from './../models/constants/urls';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }

  getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(BaseUrl + "Cars/getcardetailbycarid?carId="+carId);
  }
  getCarImagesById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=BaseUrl+"CarImages/getbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
  
}
