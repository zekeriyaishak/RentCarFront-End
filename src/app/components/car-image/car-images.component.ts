import { CarImage } from './../../models/carImage';
import { CarImageService } from './../../services/car-image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-images',
  templateUrl: './car-images.component.html',
  styleUrls: ['./car-images.component.css']
})
export class CarImagesComponent implements OnInit {
  carImages: CarImage[] = []
  dataLoaded = false;
  constructor(private carImageService:CarImageService) { }

  ngOnInit(): void {
      this.getCarImages()
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response=>{
       this.carImages = response.data;
       this.dataLoaded = true
    })
  }

}
