"use client"
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import cartImageBackground from '../../assets/images/cartImageBackground.jpg';
import Link from 'next/link';
import { Table } from '@/components';
import axiosInstance from '@/utils/api/fetch';
import { ProductCartType } from '@/types';
import ModalPayment from '@/components/Payment/modal';

const page = () => {
    const [cartData, setCartData] = useState<ProductCartType[]>([]);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState<string | undefined>();


    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            setLoading(true);
            const res = await axiosInstance.get('cart/getproduct');
            setCartData(res.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching cart data:', error);
            setLoading(false);
        }
    };

    const calculateSubtotal = () => {
        let subtotal = 0;
        for (const item of cartData) {
            subtotal += item.product.price * item.quantity;
        }
        return subtotal;
    };

    return (
        <> 
        
            <div>
                {/* Hero section */}
                <div>
                    <div>
                        <div className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                            <h1 className="text-white text-bold"> Shopping Cart</h1>
                        </div>
                        <div className="relative w-full h-48">
                            <Image src={cartImageBackground} className="w-full h-48 object-cover" alt="ProductPageImage" />
                            <div className="absolute top-0 left-0 w-full h-48 bg-black bg-opacity-50 z-0"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container flex flex-col md:flex-row justify-between'>
                <div className="md:w-3/4 md:mb-4 mr-12"> {/* Add margin-bottom (mb-4) only on medium screens and larger */}
                    {loading ? (
                        <div className="text-center">
                            <div className="spinner_status" role="status">
                                <span className="spinner_loading">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <Table cartData={cartData} loading={loading} setCartData={setCartData} />
                    )}
                </div>

                <div className='md:w-1/2 mt-10'>
                    <h2>Subtotal</h2>
                    <span className='text-bold'>${calculateSubtotal()}</span>
                    <p>taxes and shipping will calculate in Checkout.</p>
                    <div className='flex gap-1'>
                        <button
                            onClick={() => setOpenModal('dismissible')}
                            className='bg-[#0A1D37] hover:bg-blue-900 text-white font-bold py-2 px-12 rounded mt-6'
                        >
                            Checkout
                        </button>
                        <Link href='/user/shop' className='bg-[#0A1D37] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-6'>
                            continue shopping
                        </Link>
                    </div>
                </div>
                <ModalPayment
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    calculateSubtotal={calculateSubtotal}
                />
            </div>
           

        </>
    );
};

export default page;