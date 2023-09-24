"use client"
import React, { useEffect, useState } from 'react';
import { HeadersProps, ProductCartType, ProductsProps } from '@/types';
import { Table } from 'flowbite-react';
import axiosInstance from '@/utils/api/axios';
import Image from 'next/image';


const CustomTable = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<ProductsProps[]>([]);

    const handleDelete = async(_id:string) => {
        
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axiosInstance.get(`/product?q=&filterCategory=Filter%20By%20Category&minPrice=${0}&maxPrice=${0}`);
                setProducts(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }
        getData();
    }, []);

  return (
      <Table hoverable >
          <Table.Head className='sticky top-0 '>
              <Table.HeadCell className='text-bold bg-[#F3F4F6]'>
                  Image
              </Table.HeadCell>
              <Table.HeadCell className='text-bold bg-[#F3F4F6]'>
                  Title
              </Table.HeadCell>
              <Table.HeadCell className='text-bold bg-[#F3F4F6]'>
                  Price
              </Table.HeadCell>
              <Table.HeadCell className='text-bold bg-[#F3F4F6]'>
                  CATEGORY
              </Table.HeadCell>
              <Table.HeadCell className='text-bold bg-[#F3F4F6]'>
                  <span className="sr-only">
                      Edit
                  </span>
              </Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
              {loading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="spinner_status" role="status">
                          <span className="spinner_loading">Loading...</span>
                      </div>
                  </div>
              ) : (
                      products.map((product, index) => (
                      <Table.Row
                          key={index}
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  <Image
                                      src={product.imageurl}
                                      width={55}
                                      height={55}
                                      alt='image'
                                  />
                              </Table.Cell>
                              
                          <Table.Cell>
                                  {product.title}
                          </Table.Cell>
                              <Table.Cell>{product.price}</Table.Cell>
                          <Table.Cell>{product.category}</Table.Cell>
                          <Table.Cell>

                              <i className="ri-delete-bin-5-line text-red-500 text-xl cursor-pointer"
                                  onClick={() => handleDelete(product._id)}
                              ></i>
                          </Table.Cell>
                      </Table.Row>
                  ))
              )}
          </Table.Body>

      </Table>
  )
}

export default CustomTable