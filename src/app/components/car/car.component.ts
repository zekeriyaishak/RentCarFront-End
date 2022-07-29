import { CarDetail } from 'src/app/models/carDetail';
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
  carDetails:CarDetail[] = []
  dataLoaded = false;
  currentCar: Car;
  carPath: string = '';
  filterText:"";
  constructor(private carService:CarService, private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      // else if(params["colorId"] && params["brandId"]){
      //   this.getCarDetailByColorAndByBrand(params["colorId"],params["brandId"])
      // }
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

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsById(id:number){
    this.carService.getCarsById(id).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  getCurrentCarClass(car:Car){
    if(car == this.currentCar){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  getAllCarClass(){
    if(!this.currentCar){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  setCurrentCar(car:Car){
    this.currentCar = car;
  }


}
