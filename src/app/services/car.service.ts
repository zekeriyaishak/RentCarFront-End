import { SingleResponseModel } from './../models/singleResponseModel';
import { ResponseModel } from './../models/responseMode';
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
  getCars():Observable<ListResponseModel<CarDetail>>{
      return this.httpClient.get<ListResponseModel<CarDetail>>(BaseUrl + "cars/getcardetails");
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(BaseUrl + "cars/getbybrand?brandId=" + brandId);
}
  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
  return this.httpClient.get<ListResponseModel<CarDetail>>(BaseUrl + "cars/getbycolor?colorId=" + colorId);
}

  getCarsById(id:number):Observable<SingleResponseModel<CarDetail>>{
  return this.httpClient.get<SingleResponseModel<CarDetail>>(BaseUrl + "cars/getbyid?id=" + id);
}

  getCarDetail():Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(BaseUrl + "cars/getcardetail");
  }

  getCarDetailByColorAndByBrand(colorId:Number,brandId:Number):Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(BaseUrl + "Cars/getcardetailbycolorandbybrand?colorId="+colorId+ "&brandId="+brandId)
  }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
        return this.httpClient.get<ListResponseModel<CarDetail>>(BaseUrl +"Cars/getcardetails")
   }
  getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
     return this.httpClient.get<ListResponseModel<CarDetail>>(BaseUrl + "Cars/getcardetailbycarid?carId="+carId);
  }


  //Obje olarak döndürüyor
  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(BaseUrl+"Cars/add",car)
  }
  updateCar(car: Car): Observable<SingleResponseModel<Car>> {
    return this.httpClient.put<SingleResponseModel<Car>>(BaseUrl + "Cars/update", car);
  }

}
