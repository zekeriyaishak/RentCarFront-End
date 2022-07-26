import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1:any={carId:1, carName:'Hyundai', brandId:1, colorId:5}
  car2:any={carId:2, carName:'Volswagen', brandId:1, colorId:5}
  car3:any={carId:3, carName:'Honda', brandId:1, colorId:5}
  car4:any={carId:4, carName:'Renault', brandId:1, colorId:5}
  car5:any={carId:5, carName:'TOGG', brandId:1, colorId:5}

  cars = [this.car1, this.car2, this.car3, this.car4,this.car5]

  constructor() { }

  ngOnInit(): void {
  }

}
