import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface ReviewsProps {
    rating: number;
    text: string;
}
export interface ProductsProps {
    index?: number
    title?: string;
    imageurl?: string | StaticImport;
    category?: string;
    price?: number;
    _id?: string;
    avgRating?: number;
    description?: string;
    shortDescription?: string;
    reviews?: ReviewsProps[];
}


export interface ModalProps {
    isOpen: boolean;
    closeModel: () => void;
    isLoginPage: boolean;
    setLoginPage: Dispatch<SetStateAction<boolean>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface SignUpProps{
    setLoginPage: Dispatch<SetStateAction<boolean>>;
}

export interface LoginProps{
    setLoginPage: Dispatch<SetStateAction<boolean>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
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