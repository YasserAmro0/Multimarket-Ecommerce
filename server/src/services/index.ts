import { Login, registerUser } from "./auth";
import { AddProduct, GetProduct, uploadImage, getProductById } from './product';
import { addToCart, getAllCart, deleteFromCart } from './cart';
import { addReviews, getAllReviewsForProduct, updateComment, deleteReview } from "./reviews";
import { getAllReviews, deleteReviewAdmin, getProductsAdmin, deleteProductAdmin, updateProductAdmin } from './admin';
export {
    Login, registerUser,
    AddProduct, GetProduct,
    uploadImage, addToCart,
    getAllCart, getProductById,
    addReviews, getAllReviewsForProduct,
    deleteFromCart, updateComment, deleteReview,
    getAllReviews, deleteReviewAdmin,
    getProductsAdmin, deleteProductAdmin, updateProductAdmin
};