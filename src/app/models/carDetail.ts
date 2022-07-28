import { CarImage } from './carImage';
export interface CarDetail {
    carId:Number,
    carName:string,
    brandName:string,
    colorName:string,
    dailyPrice:Number,
    modelYear:Number,
    carImages: CarImage[];
}