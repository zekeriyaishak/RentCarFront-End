import { CarDetailService } from './../../services/car-detail.service';
import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = []
  dataLoaded = false;
  filterText ="";
  filterText1 ="";


  constructor(private carDetailService:CarDetailService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCarDetails()
  }

  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.carDetails = response.data;
      this.dataLoaded = true;
      this.toastrService.success("Data geldi")
    })
  }
  
}
