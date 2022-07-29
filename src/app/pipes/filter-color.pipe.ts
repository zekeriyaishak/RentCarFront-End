import { CarDetail } from 'src/app/models/carDetail';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterColor'
})
export class FilterColorPipe implements PipeTransform {

  transform(value: CarDetail[], filterText1:string): CarDetail[] {
    filterText1 = filterText1 ? filterText1.toLocaleLowerCase():""
    return filterText1 ? value.filter((c:CarDetail)=>c.colorName.toLocaleLowerCase().indexOf(filterText1)!== -1):value;
  }

}
