"use client"
import React, { useContext, useEffect, useState } from 'react';
import InputComment from './InputComment';
import { userDataContext } from '@/context';
import axiosInstance from '@/utils/api/axios';
import { usePathname } from 'next/navigation';
import { ReviewsType } from '@/types';
import { toast } from 'react-toastify';
import EditComment from './EditeComment';

const Reviews = () => {
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState<ReviewsType[]>([]);
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const pathname = usePathname();
    const userContext = useContext(userDataContext);
    const handleEditClick = () => {
        setIsEditing(true);
    };

   
    const handleRatingChange = (value: React.SetStateAction<number>) => {
        setRating(value);
    };
    const handleDeleteReview =async (_id:string) => {
        await axiosInstance.delete(`review/${_id}`);
        toast.success('delete comment done');
        fetchReviews();
    }

    useEffect(() => {
        const pathnameParts = pathname.split('/');
        const id = pathnameParts[pathnameParts.length - 1];
        const getData = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get(`review/${id}`);
                setReviews(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
            
        }
        getData();
    }, []);

    const fetchReviews = async () => {
        const pathnameParts = pathname.split('/');
        const id = pathnameParts[pathnameParts.length - 1];
        try {
            setLoading(true);
            const response = await axiosInstance.get(`review/${id}`);
            setReviews(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <div className="text-center">
                    <div className="spinner_status" role="status">
                        <span className="spinner_loading">Loading...</span>
                    </div>
                </div>
            ) : reviews.length === 0 ?(
                <div className="text-center">No reviews available. 😐</div>
            ) : (
                <div className='max-h-[500px] overflow-y-auto'>
                    {reviews.map((review, index: number) => (
                        <div
                            className={`mt-6 bg-gray-100 p-5 ${userContext?.userData ? "flex justify-between" : ""} `}
                            key={index}
                        >
                            <div>
                                <h3 className='text-bold'><i className="ri-user-fill"></i> {review.username}</h3>
                                <span className='text-[14px]'>{review.rating}/5  <i className='ri-star-fill pr-2 text-yellow-500'></i>(Rating)</span>
                                {isEditing ? (
                                    <EditComment
                                        commentForEdit={review.comment}
                                        setIsEditing={setIsEditing}
                                        idReview={review._id}
                                        fetchReviews={fetchReviews}
                                    />
                                ) : (
                                    <p className='w-85 text-slate-900'>{review.comment}</p>
                                )}
                
                            </div>
                            {userContext?.userData && (
                                <div className='text-xl cursor-pointer'>
                                    <i
                                        className="ri-delete-bin-6-line pr-2 text-red-700"
                                        onClick={() => handleDeleteReview(review._id)}
                                    ></i>
                                    <i className="ri-edit-2-fill" onClick={handleEditClick}></i>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            <div className='mt-10 text-center'>
                <h2>Leave your experience </h2>
                <span className='mt-6'>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <i
                            key={value}
                            className={`ri-star-fill pr-2 ${value <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                            onClick={() => handleRatingChange(value)}
                        ></i>
                    ))}
                </span>
                <InputComment rating={rating} setRating={setRating} fetchReviews={fetchReviews} />
            </div>
        </> 
            
        
    );
};

export default Reviews;