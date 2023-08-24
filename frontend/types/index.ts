import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
export interface ProductsProps {
    index: number
    productName: string;
    imgUrl: StaticImageData;
    category: string;
    price: number;
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
