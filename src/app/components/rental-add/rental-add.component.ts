import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {
  rentalAddForm: FormGroup;
  carDetail: CarDetail[];
  minDate = new Date();
  modelOfRental: Rental;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService,
    private paymentService: PaymentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.modelOfRental)
    //this.totalPrice()
    //console.log(this.minDate);
    this.createRentalAddForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {
        this.getCarDetailBycarId(params["carId"]);
      }
    });
  }

  getCarDetailBycarId(carId: number) {
    this.carService.getCarDetailByCarId(carId).subscribe((response) => {
      this.carDetail = response.data;
    });
  }

  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      //carId: ['', Validators.required],
      //customerId: ['', Validators.required],

      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }

  isCarAvaible() {
    if (this.rentalAddForm.valid) {
      this.rentalService
        .isCarAvaible(this.carDetail[0].carId)
        .subscribe((response) => {
          this.toastrService.success(response.message, "Başarılı");
          this.sendData();
          this.router.navigate(["/payments", this.carDetail[0].carId])

        },
          (responseError) => {
            this.toastrService.error(responseError.error)
          }
        );
    }
  }
  sendData() {
    this.modelOfRental = Object.assign({}, this.rentalAddForm.value);// buradan aldığım veriyi başka componentlarda da kullanmak için bu servisi yazdık
    //console.log(this.modelOfRental)
    this.paymentService.updateData(this.modelOfRental)
  }

}
