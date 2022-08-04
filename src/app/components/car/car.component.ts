import { BaseUrl } from './../../models/constants/urls';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { CarImageService } from 'src/app/services/car-image.service';
import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  currentCar: Car;
  cars: CarDetail[] = [];
  carImages: CarImage[] = [];
  baseUrl = "assets/images/"
  imageOfPath: string;

  brands: Brand[] = [];
  colors: Color[] = [];

  //*ngIf="car.imagePath" [src]="baseUrl+car.imagePath" class="card-img-top"
//style="object-fit: cover; margin-top: 10px;" width="100" height="50%" alt="..."
  filterText = "";
  cardetailFilter = '';
  brandFilter: number = 0;
  colorFilter: number = 0;
  branddFilter: number = 0;
  colorrFilter: number = 0;


  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService,
    private carImageService: CarImageService,
    private toastrService: ToastrService) { }     //service'leri kullanabilmek için yapılır
//rent.jpeg

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"] && params["brandId"]){
        this.getCarDetailByColorAndBrand(params["colorId"],params["brandId"])
        
      }else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
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
      this.cars = response.data
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response => { this.brands = response.data });
  }
  getColors() {
    this.colorService.getColors().subscribe(response => { this.colors = response.data });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data;
    });
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data;
    })
  }

  // getCarsById(id:number){
  //   this.carService.getCarsById(id).subscribe(response=>{
  //     //Bir data geldiği için hata var bakarsın
  //   })
  // }

  getCarDetailByColorAndBrand(colorId: number, brandId: number) {
    this.carService.getCarDetailByColorAndByBrand(colorId, brandId)
      .subscribe((response) => {
        console.log(response)
        this.cars = response.data;
      });
  }
  // addToCart(car:Car){
  //   this.toastrService.success("Sepete eklendi",car.description)
  //   this.cars.addToCart(car);
  // }


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

  image(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      var imagePath = response.data[0].imagePath
      this.imageOfPath = BaseUrl+ imagePath;
      console.log(this.imageOfPath)
    })
    return this.imageOfPath
  }

  setFilter() {
    this.toastrService.success("filtre uygulandı")
    console.log("FİLTRE")
  }

  getSelectedColor(colorId: number) {
    if (this.colorFilter == colorId) return true;
    else return false;
  }

  getSelectedBrand(brandId: number) {
    debugger;
    if (this.brandFilter == brandId) return true;
    else return false;
  }
}
