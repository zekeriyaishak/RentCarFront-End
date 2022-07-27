import { CarDetail } from './carDetail';
import { ResponseModel } from './responseMode';
export interface CarDetailResponseModel extends ResponseModel{
    data: CarDetail[]
}