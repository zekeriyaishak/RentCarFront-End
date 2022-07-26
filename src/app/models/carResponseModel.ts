import { Car } from "./car";
import { ResponseModel } from "./responseMode";

export interface CarResponseModel extends ResponseModel{
    data:Car[]
}