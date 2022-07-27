import { Customer } from './customer';
import { ResponseModel } from './responseMode';
export interface CustomerResponseModel extends ResponseModel{
    data: Customer[]
}