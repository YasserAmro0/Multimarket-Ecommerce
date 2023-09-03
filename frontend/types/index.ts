import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface ReviewsProps {
    rating: number;
    text: string;
}
export interface ProductsProps {
    index: number
    productName: string;
    imgUrl: StaticImageData;
    category: string;
    price: number;
    id: string;
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
