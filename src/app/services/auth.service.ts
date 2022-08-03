import { SingleResponseModel } from './../models/singleResponseModel';
import { TokenModel } from './../models/tokenModel';
import { BaseUrl } from './../models/constants/urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { UserModel } from '../models/userMode';
import { LocalstorageService } from './localstorage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterModel } from '../models/registerModel';
import { first, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  decodedTokenKey: any
  user: UserModel

  constructor(private httpClient: HttpClient, private localStorageService: LocalstorageService, private jwtHelper: JwtHelperService) { }
  
  
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
  register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(BaseUrl + "auth/register", registerModel)
  }


  decodedToken(token: any) {
    return this.jwtHelper.decodeToken(token)
  }


  loggedIn() {
    if (this.localStorageService.getToken()) {
      return this.jwtHelper.isTokenExpired()// true/false
    }
    else {
      return false;
    }
  }


  getUserInfo() {
    let decodedToken = this.decodedToken(this.localStorageService.getToken())
    if (decodedToken) {
      if (this.loggedIn()) {
        let tokenInfoName = Object.keys(decodedToken).filter(u => u.endsWith('/name'))[0]
        var splitted = String(decodedToken[tokenInfoName]).split(" ")
        //console.log("cevap:")
        //console.log(splitted);
        let firstName = splitted[0];
        let lastName = splitted[1]
        //console.log(firstName,lastName)
        //let userName=String(decodedToken[tokenInfoName])

        let tokenInfoId = Object.keys(decodedToken).filter(x => x.endsWith('/nameidentifier'))[0]
        let userId = Number(decodedToken[tokenInfoId]);

        let claimInfo = Object.keys(decodedToken).filter(x => x.endsWith('/role'))[0]
        let roles = decodedToken[claimInfo];
        console.log("role:", roles)

        let emailInfo = decodedToken.email;

        this.user = {
          userId: userId,
          //userName : userName,
          firstName: firstName,
          lastName: lastName,
          email: emailInfo,
          roles: roles,

        }
      }
    }
    return this.user;
  }

}
