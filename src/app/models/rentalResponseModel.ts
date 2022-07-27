import { Rental } from './rental';
import { ResponseModel } from './responseMode';
export interface RentalResponseModel extends ResponseModel{
    data:Rental[]
}