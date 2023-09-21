import { NextFunction, Response, Request } from "express";
import { Decode, RequestWithUserRole } from "../types";
import { addToCart, deleteFromCart, getAllCart } from "../services";
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

const getAllProductsInCart = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
    const userData = req.user;
    try {
        const products = await getAllCart(userData.userId);
        return res.status(201).json({ message: "get all Product in Cart successfully", data: products });

    } catch (error) {
        next(error);
    }
    
}

const deleteFromCartController = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
    const userData = req.user;
    const { productId }: { productId: Types.ObjectId } = req.params;

    try {
        const dataAfterDelete = await deleteFromCart(userData.userId, productId);
        return res.status(201).json({ message: "delete Product in Cart successfully", data: dataAfterDelete });

    } catch (error) {
        next(error);
    }
    
}

export { addToCartController, getAllProductsInCart, deleteFromCartController };