"use client"
import { ReviewAdminType } from '@/types';
import axiosInstance from '@/utils/api/axios';
import { Table } from 'flowbite-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


const page = () => {
  const [reviews, setReviews] = useState<ReviewAdminType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleDelete = async(_id: string) => {
    try {
      await axiosInstance.delete(`/admin/review/${_id}`);
      setReviews((prevReviews) => prevReviews.filter((review) => review._id !== _id));
      toast.success('delete review successfully ✔');
      
    } catch (error) {
      toast.error('there is some error');
    }
    
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/admin/allreviews');
        setReviews(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("there is error");
        setLoading(false);
      }

    }
    fetchData();
  }, [])
  return (
    <div className="w-full max-w-6xl p-4">
      <h1 className="text-2xl font-semibold mb-4">Reviewers</h1>
      <ToastContainer />
      <div className='max-h-[600px] overflow-y-auto'>
      <Table hoverable >
          <Table.Head className='sticky top-0 '>
            <Table.HeadCell className='text-bold bg-[#F3F4F6]'>
            Product name
          </Table.HeadCell>
            <Table.HeadCell className='text-bold bg-[#F3F4F6]'>
            Image
          </Table.HeadCell>
            <Table.HeadCell className='text-bold bg-[#F3F4F6]'>
            username
          </Table.HeadCell>
            <Table.HeadCell className='text-bold bg-[#F3F4F6]'>
            comment
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
              reviews.map((review, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {review.title}
                  </Table.Cell>
                  <Table.Cell>
                    <Image
                      src={review.imageurl}
                      width={55}
                      height={55}
                      alt='image'
                    />
                  </Table.Cell>
                  <Table.Cell>{review.username}</Table.Cell>
                  <Table.Cell>{review.comment}</Table.Cell>
                  <Table.Cell>
                    
                    <i className="ri-delete-bin-5-line text-red-500 text-xl cursor-pointer"
                      onClick={()=>handleDelete(review._id)}
                    ></i>
                  </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        
        </Table>
      </div>
      </div>  
  )
}

export default page