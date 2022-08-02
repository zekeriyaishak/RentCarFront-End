import { ResponseModel } from './responseMode';
export interface SingleResponseModel<T> extends ResponseModel{
    data:T;
}