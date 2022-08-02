import { SingleResponseModel } from './../models/singleResponseModel';
import { TokenModel } from './../models/tokenModel';
import { ResponseModel } from './../models/responseMode';
import { BaseUrl } from './../models/constants/urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  
  
  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(BaseUrl + "auth/login", loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true
    }
    else{
      return false;
    }
  }
}
