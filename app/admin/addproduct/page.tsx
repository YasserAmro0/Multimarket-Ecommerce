"use client"
import { FormAddProduct } from '@/components';
import { ProductsProps } from '@/types';
import React, { useState } from 'react';
const defaultProductData: ProductsProps = {
    title: '',
    price: 0,
    category: '',
    description: '',
    shortDescription: '',
    imageurl: '',
    index: 0,
    _id: '',
    avgRating: 0,
    reviews: []
};

const Page = () => {
    const [initialProductData, setInitialProductData] = useState<ProductsProps>(defaultProductData);
    return (
        <FormAddProduct showAddButton={true} initialProductData={initialProductData} />
    )
}
export default Page;