"use client"
import { userDataContext } from '@/context';
import Modal from '../Modal';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { usePathname } from 'next/navigation';
import axiosInstance from '@/utils/api/axios';
import { AxiosError } from 'axios';
import { InputCommentType } from '@/types';

const InputComment = ({ rating, setRating, setReviews, reviews }: InputCommentType) => {
    const [comment, setComment] = useState('');
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isLoginPage, setIsLoginPage] = useState(true);
    const pathname = usePathname();
    const userContext = useContext(userDataContext);

    const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };
    const handleReviewSubmit = async () => {
        if (!userContext?.userData) {
            setIsLoginPage(false)
            setIsLoginModalOpen(true);
            toast.info("login before adding to cart");
        }
        const pathnameParts = pathname.split('/');
        const id = pathnameParts[pathnameParts.length - 1];

        try {
            const response =await axiosInstance.post(`review/addreview/${id}`, {
                comment,
                rating,
            });
            setRating(0);
            setComment('');
            setReviews([...reviews, response.data]);
            toast.success('add review successfully 🎉')
        } catch (error) {
            const err = error as AxiosError;
                toast.error(err.message);
        }
      
        
    }

    return (
        <><div>
            <textarea
                value={comment}
                onChange={handleComment}
                placeholder="Write your review here..."
                className="h-48 p-2 border rounded-md w-full focus:outline-none mt-6 border-gray-400" />
        </div>
            <div>
                <button className='bg-[#0A1D37] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-6'
                    onClick={handleReviewSubmit}
                >
                    Submit Review
                </button>
            </div>
            {isLoginModalOpen && (
                <Modal
                    isOpen={isLoginModalOpen}
                    setIsOpen={setIsLoginModalOpen}
                    isLoginPage={isLoginPage}
                    closeModel={() => setIsLoginModalOpen(false)}
                    setLoginPage={setIsLoginPage}
                />

            )}
        </>
       
    );
};

export default InputComment;