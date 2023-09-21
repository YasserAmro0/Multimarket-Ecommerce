"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axiosInstance from '@/utils/api/axios';

const Table = () => {
    
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axiosInstance.get('cart/getproduct');
                const dataAsArray = Object.values(res.data);
                console.log(dataAsArray)// Convert the object to an array
                setCartData(dataAsArray);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        }
        getData();
    }, []);
  return (
      <div className="mt-10 ">
          <table className="min-w-full">
              <thead>
                  <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="px-6 py-3 bg-gray-100">action</th>
                  </tr>
              </thead>
              <tbody className="bg-white">
                  {cartData.map((product) => (
                      <tr key={product.id}>
                          <td className="px-6 py-4 whitespace-no-wrap">
                              <Image src={product.imageurl} alt="Product Image" width={300} height={300} className="h-20 w-20" />
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap">{product.title}</td>
                          <td className="px-6 py-4 whitespace-no-wrap">${product.price}</td>
                          <td className="px-6 py-4 whitespace-no-wrap">
                              <input type="number" className="w-16 border rounded-md py-1 px-2" placeholder="1" />
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap">
                              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-full">Delete</button>
                          </td>
                      </tr>
                  ))}

              </tbody>
          </table>
      </div>
  )
}

export default Table;