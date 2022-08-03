import { BaseUrl } from './../models/constants/urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseMode';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private dataSource = new ReplaySubject<Rental>(1)//rental türünde kayıt tutuyor.
  //dataSource:Rental bunu bi dene
  currentData = this.dataSource.asObservable();//döndürülebilir.

  constructor(private httpClient: HttpClient) { }
  updateData(data: Rental) {
    this.dataSource.next(data);
  }

  add(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(BaseUrl + "Rental/add", rental)
  }

  totalPrice(totalAmountInfo: any): Observable<any> {
    let newPath = BaseUrl + "rental/totalprice"

    return this.httpClient.get<any>(newPath, totalAmountInfo)
  }
}
