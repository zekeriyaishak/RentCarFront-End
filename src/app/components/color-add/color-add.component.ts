import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }
  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      colorName:["",Validators.required]
    })
  }
  add(){
    if(this.colorAddForm.valid){
      //car için sınıf oluşturuyo ve alanları alıp ekliyo
  let colorModel =Object.assign({},this.colorAddForm.value)
  this.colorService.add(colorModel).subscribe(response=>{
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


}