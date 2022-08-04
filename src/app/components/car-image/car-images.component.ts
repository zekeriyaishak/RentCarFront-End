import { CarImage } from './../../models/carImage';
import { CarImageService } from './../../services/car-image.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-images',
  templateUrl: './car-images.component.html',
  styleUrls: ['./car-images.component.css']
})
export class CarImagesComponent implements OnInit {
  carImages: CarImage[] = []
  dataLoaded = false;
  baseUrl = "https://localhost:7197/Uploads/Images/"

  constructor(private carImageService:CarImageService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarImagesByCarId(params["carId"])
      }
    })
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response=>{
       this.carImages = response.data;    })
  }
  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
    })
  }
  getActiveImageClass(carImage: CarImage) {
    if (carImage === this.carImages[0]) {
      return "active"
    } else {
      return ""
    }

  }

}
