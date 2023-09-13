import { NextFunction, Response, Request } from "express";
import * as yup from 'yup';
import { Types } from "mongoose";
import { RequestWithUserRole } from "../types";
import { reviewsSchema, templateErrors } from "../helpers";
import { addReviews, getAllReviewsForProduct } from "../services";


const addReviewsController = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
    const userData = req.user;
    const { productId }: { productId: Types.ObjectId } = req.params;
    const { comment, rating } = req.body;

    try {
        await reviewsSchema.validate({ comment, rating });
        await addReviews(userData?.userId, productId, comment, rating);
        return res.status(201).json({ message: 'add review successfully' });
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
export { addReviewsController, getReviewsController };