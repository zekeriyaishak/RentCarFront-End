import { Brand } from './brand';
import { ResponseModel } from './responseMode';
export interface BrandResponseModel extends ResponseModel{
    data: Brand[]
}