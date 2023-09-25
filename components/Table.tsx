"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axiosInstance from '@/utils/api/axios';
import { ToastContainer, toast } from 'react-toastify';
import { ProductCartType, TableCartType } from '@/types';

const Table = ({ loading, cartData, setCartData }: TableCartType) => {
 
    const handleDeleteProduct = async (_id: string) => {
        try {
            await axiosInstance.delete(`cart/${_id}`);
            setCartData((prevCart) => prevCart.filter((cart) => cart.product._id !== _id));
            toast.success('delete product done ✔');
        } catch (error) {
            console.log(error);
        }
    }
  return (
      <div className="mt-10 max-h-[500px] overflow-y-auto">
          <ToastContainer />
          <table className="min-w-full ">
              <thead className='bg-white'>
                  <tr className="sticky top-0 ">
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="px-6 py-3 ">action</th>
                  </tr>
              </thead>
              <tbody className="bg-gray-50">
                  {loading ? (
                      <div className="text-center">
                          Loading...
                      </div>
                  ) : cartData.length === 0 ? ( // Check if cartData is empty
                          <tr>
                              <td colSpan={5} className="text-center py-4">
                                  Your cart is empty 😐. Go to shopping.🛍
                              </td>
                          </tr>
                  ) : (
                      cartData.map((item) => (
                          <tr key={item.product._id}>
                              <td className="px-6 py-4 whitespace-no-wrap">
                                  <Image src={item.product.imageurl} alt="Product Image" width={300} height={300} className="h-20 w-20" />
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap">{item.product.title}</td>
                              <td className="px-6 py-4 whitespace-no-wrap">${item.product.price}</td>
                              <td className="px-6 py-4 whitespace-no-wrap">
                                  <div className="w-16 border rounded-md py-1 px-2 bg-white">{item.quantity}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap">
                                  <button
                                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-full"
                                      onClick={() => handleDeleteProduct(item.product._id)}
                                  >
                                      Delete
                                  </button>
                              </td>
                          </tr>
                      ))
                  )}
                 

              </tbody>
          </table>
      </div>
  )
}

export default Table;