import { BaseUrl } from './../models/constants/urls';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rental } from '../models/rental';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseMode';
import { SingleResponseModel } from '../models/singleResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(BaseUrl + "Rentals/getall")
  }
 
  isCarAvaible(carId: Number) {
    return this.httpClient.get<ResponseModel>(BaseUrl + "Rentals/iscaravaible?cardId="+carId);

  }

  getRentalByCarId(carId:number) : Observable<SingleResponseModel<Rental>>{
    let newPath = BaseUrl+"Rentals/getrentalbyid?rentalId="+carId;
    return this.httpClient.get<SingleResponseModel<Rental>>(newPath);
  }
  
}
