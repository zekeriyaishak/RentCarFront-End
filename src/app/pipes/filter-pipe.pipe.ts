import { CarDetail } from 'src/app/models/carDetail';
import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    return filterText?value.filter((c:CarDetail)=>c.brandName.toLocaleLowerCase().indexOf(filterText)!== -1):value
  }

}
