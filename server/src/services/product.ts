import { Product } from "../models"
import { ProductType } from "../types";
import { v2 as cloudinary } from 'cloudinary';
import config from '../config';
import product from "../models/product";
import { Types } from "mongoose";


cloudinary.config({
    cloud_name: config.CLOUDINARY_CLOUD_NAME,
    api_key: config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_API_SECRET,
});

const uploadImage = async (filePath: any) => {
    const result = await cloudinary.uploader.upload(filePath);
    return result;
}

const AddProduct = async ({
    title, price, category, description, shortDescription, imageurl
}: ProductType) => {
    
    const pathFile = imageurl; 
    const cloudinaryResult = await uploadImage(pathFile);
    const productItem = ({
        title,
        price,
        category,
        description,
        shortDescription,
        imageurl: cloudinaryResult.secure_url,
    });
    await product.create(productItem);
    
    return product;

}

const GetProduct = async (filterCategory: string, name: string, minPrice : number, maxPrice: number) => {

    const filter: any = {};

    if (minPrice !== 0 && maxPrice !== 0) {
        filter.price = {
            $gt: minPrice,
            $lte: maxPrice,
        };
    } else if (minPrice !== 0) {
        filter.price = {
            $gte: minPrice,
        };
    } else if (maxPrice !== 0) {
        filter.price = {
            $lte: maxPrice,
        };
    }
    if (name) {
        filter.title = {
            $regex: name,
            $options: 'i',
        };
    }

    if (filterCategory) {
        filter.category = filterCategory;
    }
    
    const products = await Product.find(filter);

    return products;
}
 
const getProductById = async (productId: Types.ObjectId) => {
    let product = await Product.findById(productId);
    return product;
}

export { AddProduct, GetProduct, uploadImage, getProductById };