import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  dataLoaded = false;

  constructor(private carService:CarService, private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else{
        this.getCars();
      }
    })
  }

  getCars(){
    //neden subscribe lazım? - backend apisi ile çalışıyorsan 
    //23.satırdaki asenkron çalışıyor.
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }

}
