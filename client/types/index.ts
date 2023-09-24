import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface ReviewsProps {
    rating: number;
    text: string;
}
export interface ProductsProps {
    index: number
    title: string;
    imageurl: string;
    category: string;
    price: number;
    _id: string;
    avgRating?: number;
    description: string;
    shortDescription: string;
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

export interface UserData {
    username?: string;
    _id?: string;
}
export interface AppContextProps {
    children: React.ReactNode;
}

export interface UserDataContextValue {
    userData: UserData | null;
    setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
    userChange: boolean;
    setUserChange: React.Dispatch<React.SetStateAction<boolean>>;

}

export interface InputCommentType{
    rating: number;
    setRating: Dispatch<SetStateAction<number>>;
    setReviews: Dispatch<SetStateAction<ReviewsType[]>>;
    reviews: ReviewsType[];
}

export interface ReviewsType {
    comment: string;
    rating: number;
    productId: string;
    userId: string;
    username: string;
    _id: string;
}

export interface CommentEditType{
    commentForEdit: string;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    idReview: string;
    fetchReviews: () => Promise<void>;
}
export interface ProductCartType {
    product: {
        _id: string;
        category: string;
        description: string;
        imageurl: string;
        price: number;
        shortDescription: string;
        title: string;
    };
    quantity: number;
}

export interface TableCartType{
    loading: boolean;
    cartData: ProductCartType[];
    setCartData: Dispatch<SetStateAction<ProductCartType[]>>;
}

export interface ReviewComType{
    reviews: ReviewsType[];
    isLoading: boolean;
    fetchReviews: () => Promise<void>;
    setReviews: Dispatch<SetStateAction<ReviewsType[]>>;

}

export interface ReviewAdminType{
    title: string;
    imageurl: string;
    comment: string;
    username: string;
    _id: string;

}

export interface CartProps{
    title: string;
    imageurl: string;
    category: string;
    price: number;
    index: number;
    _id: string;
}