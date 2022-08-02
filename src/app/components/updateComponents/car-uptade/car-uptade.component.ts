import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-uptade',
  templateUrl: './car-uptade.component.html',
  styleUrls: ['./car-uptade.component.css']
})

export class CarUptadeComponent implements OnInit {
  @Input() id: number;
  updateCarFormGroup: FormGroup;
  currentCar: Car;
  constructor(  private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.id;
    this.updateCarFormGroupBuild();
  }
  updateCarFormGroupBuild() {
      this.updateCarFormGroup = this.formBuilder.group({
      id: [this.id],
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", [Validators.required]],
      description: ["", Validators.required],
      })
  }

  uptadeCar(){
    if (this.updateCarFormGroup.valid) {
      let carModel = Object.assign({}, this.updateCarFormGroup.value);

      this.carService.updateCar(carModel).subscribe(
        (response) => {
          this.toastrService.success(
            response.message,
            'Araba Güncellendi'
          );
        },
        (errorResponse) => {
          if (errorResponse.error.ValidationErrors.length > 0) {
            for (
              let i = 0;
              i < errorResponse.error.Errors.length;
              i++
            ) {
              this.toastrService.error(
                errorResponse.error.ValidationErrors[i].ErrorMessage,"Doğrulama Hatası"
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error("Formunuz Eksik");
    }
  }

}
