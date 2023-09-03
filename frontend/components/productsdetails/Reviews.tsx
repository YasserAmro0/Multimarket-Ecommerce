"use client"
import React, { useState } from 'react';
import InputComment from './InputComment';

const Reviews = () => {
    const [rating, setRating] = useState(0);
    const handleRatingChange = (value: React.SetStateAction<number>) => {
        setRating(value);
    };

    return (
        <div>
            <div className='mt-6'>
                <h3 className='text-bold'>UserName</h3>
                <span className=' text-sm'>3.5 (Rating)</span>
                <p className='w-85'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='mt-6'>
                <h3 className='text-bold'>UserName</h3>
                <span className=' text-sm'>3.5 (Rating)</span>
                <p className='w-85'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='mt-4 text-center'>
                <h2>Leave your experience </h2>
                <span className='mt-4'>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <i
                            key={value}
                            className={`ri-star-fill pr-2 ${value <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                            onClick={() => handleRatingChange(value)}
                        ></i>
                    ))}
                </span>
                <InputComment/>
            </div>
        </div>
    );
};

export default Reviews;