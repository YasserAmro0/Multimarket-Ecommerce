import { NextFunction, Response, Request } from "express";
import { Decode, RequestWithUserRole } from "../types";
import { addToCart, getAllCart } from "../services";
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
        console.log(products, 'hiii');
        return res.status(201).json({ message: "get all Product in Cart successfully", data: { ...products }});

    } catch (error) {
        next(error);
    }
    
}

export { addToCartController, getAllProductsInCart };