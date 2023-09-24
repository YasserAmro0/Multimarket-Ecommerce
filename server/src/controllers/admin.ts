import { NextFunction, Response, Request } from "express";
import * as yup from 'yup';
import { deleteProductAdmin, deleteReviewAdmin, getAllReviews, getProductsAdmin, updateProductAdmin } from "../services";
import { Types } from "mongoose";
import { RequestWithUserRole } from "../types";
import { productSchema, templateErrors } from "../helpers";

const getAllReviewsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reviews = await getAllReviews();
        return res.status(200).json({ massage: "get all reviews done ", data: reviews });
    } catch (error) {
        next(error);
    }
    
}

const deleteReviewAdminController = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
    try {
        const { reviewId }: { reviewId: Types.ObjectId } = req.params;
       const removed = await deleteReviewAdmin(reviewId);
        return res.status(201).json({ message: 'delete review done ✔', data: removed });
    } catch (error) {
        next(error);
    }
}

const getProductAdminController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await getProductsAdmin();
        return res.status(201).json({ message: 'get all Products successfully ', data: products });

    } catch (error) {
        next(error);
    }
}

const deleteProductAdminController = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
    try {
        const { productId }: { productId: Types.ObjectId } = req.params;
        const removed = await deleteProductAdmin(productId);
        return res.status(201).json({ message: 'delete Product done ✔', data: removed });
        
    } catch (error) {
        next(error);
    }
}

const updateProductAdminController = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
    const {
        title,
        price, category,
        description, shortDescription,
        imageurl } = req.body;
    const { productId }: { productId: Types.ObjectId } = req.params;
    try {
        await productSchema.validate({ title, price, category, description, shortDescription, imageurl });
       const afterUpdate= await updateProductAdmin(
            productId, title,
            price, category,
            description, shortDescription,
            imageurl);
        return res.status(201).json({ message: 'update Product success', data: afterUpdate });
        
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            return next(templateErrors.BAD_REQUEST(error.message));
        }
        next(error);
    }
}

export {
    getAllReviewsController,
    deleteReviewAdminController,
    getProductAdminController,
    deleteProductAdminController,
    updateProductAdminController
};