import { NextFunction, Response, Request } from "express";
import { deleteReviewAdmin, getAllReviews } from "../services";
import { Types } from "mongoose";
import { RequestWithUserRole } from "../types";

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

export { getAllReviewsController, deleteReviewAdminController };