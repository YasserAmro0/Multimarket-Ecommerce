import { Login, registerUser } from "./auth";
import { AddProduct, GetProduct, uploadImage, getProductById } from './product';
import { addToCart, getAllCart, deleteFromCart } from './cart';
import { addReviews, getAllReviewsForProduct } from "./reviews";
export {
    Login, registerUser,
    AddProduct, GetProduct,
    uploadImage, addToCart,
    getAllCart, getProductById,
    addReviews, getAllReviewsForProduct,
    deleteFromCart
};