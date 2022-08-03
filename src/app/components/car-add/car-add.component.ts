import { ToastrService } from 'ngx-toastr';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm: FormGroup;
  brands: Brand[] = []
  colors: Color[] = []
  selectedBrand = 0
  selectedColor = 0
  constructor(private formBuilder:FormBuilder,
     private carService:CarService,
     private toastrService:ToastrService,
     private brandService: BrandService,
     private colorService: ColorService,) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }
  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      description:["",Validators.required],
      dailyPrice:["",Validators.required],
      modelYear:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required]
    })
  }

  add(){
    if(this.carAddForm.valid){
          //car için sınıf oluşturuyo ve alanları alıp ekliyo
      let carModel =Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response=>{
        this.toastrService.success(response.message, "Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          }
        }
      })
    }
    else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }



  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
    })
  }

  
}
