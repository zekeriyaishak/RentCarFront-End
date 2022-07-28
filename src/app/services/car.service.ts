import { CarDetail } from 'src/app/models/carDetail';
import { Car } from './../models/car';
import { ListResponseModel } from './../models/listResponseModel';
import { BaseUrl } from './../models/constants/urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  //Angularda tanımlı httpclient ile apiye bağlanıyoruz
  //httpclient ile istek yap. gele datayı  abone et. gelen response için 
  getCars():Observable<ListResponseModel<Car>>{
      return this.httpClient.get<ListResponseModel<Car>>(BaseUrl + "cars/getall");
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(BaseUrl + "cars/getbybrand?brandId=" + brandId);
}
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
  return this.httpClient.get<ListResponseModel<Car>>(BaseUrl + "cars/getbycolor?colorId=" + colorId);
}

  getCarsById(id:number):Observable<ListResponseModel<Car>>{
  return this.httpClient.get<ListResponseModel<Car>>(BaseUrl + "cars/getbyid?id=" + id);
}

  getCarDetail():Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(BaseUrl + "cars/getcardetail");
  }

  getCarDetailByColorAndByBrand(colorId:Number,brandId:Number):Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(BaseUrl + "cars/getcardetailsbycolorandbybrand")
  }
  

}
