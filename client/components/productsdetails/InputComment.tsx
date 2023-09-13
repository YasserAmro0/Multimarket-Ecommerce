"use client"
import React, { useState } from 'react';

const InputComment = () => {
    const [review, setReview] = useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setReview(event.target.value);
    };

    return (
        <><div>
            <textarea
                value={review}
                onChange={handleChange}
                placeholder="Write your review here..."
                className="h-48 p-2 border rounded-md w-full focus:outline-none mt-6 border-gray-400" />
        </div>
            <div>
                <button className='bg-[#0A1D37] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-6'>
                    Submit Review
                </button>
            </div>
        </>
       
    );
};

export default InputComment;