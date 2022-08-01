import { ResponseModel } from './../models/responseMode';
import { BaseUrl } from './../models/constants/urls';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(BaseUrl + "colors/getall");
  }
  add(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(BaseUrl + "Colors/add",color)
  }

}
