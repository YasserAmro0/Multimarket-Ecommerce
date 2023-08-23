import { StaticImageData } from "next/image";

export interface ProductsProps{
    index:number
    productName: string;
    imgUrl: StaticImageData;
    category: string;
    price: number;
}