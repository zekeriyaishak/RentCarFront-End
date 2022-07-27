import { BaseUrl } from './../models/constants/urls';
import { CarImageResponseModel } from './../models/carImageResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<CarImageResponseModel>{
    return this.httpClient.get<CarImageResponseModel>(BaseUrl + "carImages/getall")
  }

}
