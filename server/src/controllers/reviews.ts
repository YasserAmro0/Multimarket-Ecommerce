import { NextFunction, Response, Request } from "express";
import * as yup from 'yup';
import { Types } from "mongoose";
import { RequestWithUserRole } from "../types";
import { reviewsSchema, templateErrors } from "../helpers";
import { addReviews, deleteReview, getAllReviewsForProduct, updateComment } from "../services";


const addReviewsController = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
    const userData = req.user;
    const { productId }: { productId: Types.ObjectId } = req.params;
    const { comment, rating } = req.body;

    try {
        await reviewsSchema.validate({ comment, rating });
        const reviews = await addReviews(userData?.userId, productId, comment, rating);
        return res.status(201).json({ message: 'add review successfully', data: reviews });
    } catch (err) {
        if (err instanceof yup.ValidationError) {
            return next(templateErrors.BAD_REQUEST(err.message));
        }
        next(err);
    }

}


const getReviewsController = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
    const { productId }: { productId: Types.ObjectId } = req.params;
    try {
        const reviews = await getAllReviewsForProduct(productId);
        return res.status(201).json({ message: 'get reviews successfully', data: reviews });
    } catch (error) {
        next(error);
    }
    
} 

const updateCommentController = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
    const userData = req.user; 
    const { idReview }: { idReview: Types.ObjectId } = req.params;
    const { newComment } = req.body;
    try {
        const reviewAfterUpdate = await updateComment(userData.userId, idReview, newComment);
        return  res.status(201).json({ message:'update comment successfully ',data :reviewAfterUpdate});
        
    } catch (error) {
        next(error);
    }
}

const deleteReviewController = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
    const { idReview }: { idReview: Types.ObjectId } = req.params;
    try {
        await deleteReview(idReview);
        return res.status(201).json({ message: 'delete review successfully '});

      
    } catch (error) {
        next(error);
  }
}

export { addReviewsController, getReviewsController, updateCommentController, deleteReviewController };