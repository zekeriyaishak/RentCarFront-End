import { BaseUrl } from './../models/constants/urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  //Angularda tanımlı httpclient ile apiye bağlanıyoruz
  //httpclient ile istek yap. gele datayı  abone et. gelen response için 
  getCars():Observable<CarResponseModel>{
      return this.httpClient.get<CarResponseModel>(BaseUrl + "cars/getall");
  }
}
