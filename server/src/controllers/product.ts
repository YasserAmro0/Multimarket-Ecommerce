import { NextFunction, Response, Request } from "express";
import * as yup from 'yup';
import { AddProduct, GetProduct, getProductById, uploadImage } from '../services'
import { productSchema, templateErrors } from "../helpers";
import mongoose from "mongoose";

const addProductController = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
        await productSchema.validate(body)
        await AddProduct(body);
        return res.status(201).json({ message: 'add Product successfully' });
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            return next(templateErrors.BAD_REQUEST(error.message));
        }
        next(error);
    }
}

const getProductController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            q, filterCategory, minPrice, maxPrice,
        } = req.query;
        const parsedMinPrice = parseFloat(minPrice as string);
        const parsedMaxPrice = parseFloat(maxPrice as string);
        

        const products = await GetProduct(filterCategory as string, q as string, parsedMinPrice, parsedMaxPrice);
        return res.status(201).json({ message: 'get Product successfully', data:  products });
    } catch (error) {
        next(error);
    }
}

const getProductByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
       
        const { productId } = req.params;

        const objectIdProductId = new mongoose.Types.ObjectId(productId);

        const product = await getProductById(objectIdProductId);

        if (!product) {
            throw templateErrors.BAD_REQUEST('Product not found');
        }
        return res.status(201).json({ message: 'show Product by id successfully', data:  product  });
        
    } catch (error) {
        next(error);
    }
}


export { addProductController, getProductController, getProductByIdController };