import mongoose, { Types } from "mongoose";
import { Product, Reviews } from "../models";
import { templateErrors } from "../helpers";


const getAllReviews = async () => {
  
        const reviews = await Reviews.find({})
            .populate('userId', 'username')
            .populate('productId', 'title imageurl')
        .select('comment'); 
        
        const formattedReviews = reviews.map((review) => ({
            title: review.productId.title,
            imageurl: review.productId.imageurl,
            username: review.userId.username,
            comment: review.comment,
            _id: review.id,
        }));
    
    return formattedReviews;
}


const deleteReviewAdmin = async (reviewId: Types.ObjectId) => {
    const deletedReview = await Reviews.deleteOne({ _id: reviewId });
    if (!deletedReview) {
        throw templateErrors.NOT_FOUND("Review not found");
    }
    return deletedReview;
}


const getProductsAdmin = async () => {
    const products = await Product.find({});
    return products;
}

const deleteProductAdmin = async (productId: Types.ObjectId) => {
    await Reviews.deleteMany({ productId: productId });
    const deleted = await Product.deleteOne({ _id: productId });
    if (!deleted) {
        throw templateErrors.NOT_FOUND("product not found");
    }
    return deleted;
}

const updateProductAdmin = async (
    productId: Types.ObjectId,
    title: string, price: number,
    category: string, description:string,
    shortDescription: string, imageurl: string) => {
    
    const product = await Product.findById(productId);
    if (!product) {
        throw templateErrors.NOT_FOUND("product not found");
    }

    product.title = title;
    product.price = price;
    product.category = category;
    product.description = description;
    product.shortDescription = shortDescription;
    product.imageurl = imageurl;

    const afterUpdate = await product.save();
    return afterUpdate;
}

export {
    getAllReviews,
    deleteReviewAdmin,
    getProductsAdmin,
    deleteProductAdmin,
    updateProductAdmin
};