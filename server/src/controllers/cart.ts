import { NextFunction, Response, Request } from "express";
import { Decode, RequestWithUserRole } from "../types";
import { addToCart } from "../services";
import mongoose, { Types } from "mongoose";

const addToCartController = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
    const userData = req.user;
    const { productId }: {productId : Types.ObjectId} = req.params;
    const { quantity } = req.body;
    try {
     await addToCart(userData?.userId, productId , quantity);
     return res.status(201).json({ message: "Item added to cart successfully" });
    } catch (error) { 
        next(error);
    }

}

export default addToCartController;