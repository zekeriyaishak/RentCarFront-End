import { CarImage } from "./carImage";
import { ResponseModel } from "./responseMode";

export interface CarImageResponseModel extends ResponseModel{
    data: CarImage[]
}