"use client"
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Image from 'next/image'
import { FilterShop } from '@/types';
import noDataFound from '../app/assets/images/sorry.png';
import axiosInstance from '@/utils/api/axios';

const ShopProducts = ({search,minPrice,maxPrice,selectedCategory}:FilterShop) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const productsPerPage = 8;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axiosInstance.get(`product?q=${search}&filterCategory=${selectedCategory}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
                setProducts(res.data);
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); 
            }
        }
        getData();
    }, [search, minPrice, maxPrice, selectedCategory]);

    return (
        <>
            {loading ? (
                <div className="text-center">
                    <div className="spinner_status" role="status">
                        <span className="spinner_loading">Loading...</span>
                    </div>
                </div>
            ) : products.length === 0 ? (
                    <div className="flex justify-center mt-5">
                        <Image
                            src={noDataFound}
                            width={500}
                            height={500}
                            alt="no data"
                        />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container">
                    {currentProducts.map((item, index) => (
                        <Card
                            _id={item._id}
                            index={index}
                            title={item.title}
                            imageurl={item.imageurl}
                            category={item.category}
                            price={item.price}
                        />
                    ))}
                </div>
            )}

            <div className="container flex justify-between mt-4">
                <div className="text-bold text-[#0A1D37]">
                    {`Showing ${currentPage} to ${Math.ceil(products.length / 8)} of results ${products.length}`}
                </div>

                <div>
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`mx-2 px-4 py-2 ${currentPage === 1 ? 'bg-gray-400' : 'bg-[#0A1D37]'} text-white rounded`}
                    >
                        {"<"}
                    </button>
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={indexOfLastProduct >= products.length}
                        className={`mx-2 px-4 py-2 text-white rounded ${indexOfLastProduct >= products.length ? 'bg-gray-400' : 'bg-[#0A1D37]'}`}
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </>
    );
}

export default ShopProducts