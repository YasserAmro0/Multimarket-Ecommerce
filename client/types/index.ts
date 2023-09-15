import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface ReviewsProps {
    rating: number;
    text: string;
}
export interface ProductsProps {
    index?: number
    title?: string;
    imageurl?: StaticImageData;
    category?: string;
    price?: number;
    _id?: string;
    avgRating?: number;
    description?: string;
    shortDesc?: string;
    reviews?: ReviewsProps[];
}


export interface ModalProps {
    isOpen: boolean;
    closeModel: () => void;
    isLoginPage: boolean;
    setLoginPage: Dispatch<SetStateAction<boolean>>;
}

export interface SignUpAndLoginProps{
    setLoginPage: Dispatch<SetStateAction<boolean>>;
}

export interface HeadersProps {
    title: string;
}

export interface FilterShop{
    selectedCategory?: string;
    setSelectedCategory?: Dispatch<SetStateAction<string>>;
    minPrice?: number;
    setMinPrice?: Dispatch<SetStateAction<number>>;
    maxPrice?: number;
    setMaxPrice?: Dispatch<SetStateAction<number>>;
    search?: string ;
    setSearch?: Dispatch<SetStateAction<string>>;

} 
export interface FilterPriceProps {
    minPrice: number;
    setMinPrice: (value: number) => void;
    maxPrice: number;
    setMaxPrice: (value: number) => void;
}