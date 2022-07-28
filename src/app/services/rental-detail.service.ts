import { RentalDetail } from './../models/rentalDetail';
import { BaseUrl } from './../models/constants/urls';
import { CarDetail } from 'src/app/models/carDetail';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {

  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<ListResponseModel<RentalDetail>>{
    return this.httpClient.get<ListResponseModel<RentalDetail>>(BaseUrl + "Rentals/getrentaldetails")
  }

}
