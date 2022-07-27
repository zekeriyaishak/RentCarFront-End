import { BaseUrl } from './../models/constants/urls';
import { ColorResponseModel } from './../models/colorResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(BaseUrl + "colors/getall");
  }

}
