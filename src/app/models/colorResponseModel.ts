import { Color } from './color';
import { ResponseModel } from './responseMode';
export interface ColorResponseModel extends ResponseModel {
    data: Color[]
}