import { ResponseModel } from "./responseMode";

export interface ListResponseModel<T> extends ResponseModel{
    data:T[]
}