import { NextFunction, Response, Request } from "express";
import * as yup from 'yup';
import { AddProduct, GetProduct, uploadImage } from '../services'
import { productSchema, templateErrors } from "../helpers";

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
        const products = await GetProduct(filterCategory as string, q as string, minPrice as string , maxPrice as string);
        console.log(products,'contro')
        return res.status(201).json({ message: 'get Product successfully', data: { ...products } });
    } catch (error) {
        next(error);
    }
}


export { addProductController, getProductController };