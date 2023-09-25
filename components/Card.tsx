import React from 'react';
import Image from 'next/image';
import { CartProps, ProductsProps } from '@/types';
import Link from 'next/link';

const Card = ({ title, imageurl, category, price, index, _id }: CartProps) => {
    return (
        <div className='container w-72 h-full shadow-lg p-4 relative' key={index}>
            <Link href={`/user/shop/${_id}`}>
                <div className='transition-transform transform hover:scale-105'>
                    {imageurl && (
                        <Image
                            src={imageurl}
                            alt="Arm Chairs"
                            width={350}
                            height={350}
                            className='w-full h-56'
                        />
                    )}
                </div>
            </Link>
            <div>
                {title && <h2 className='text-xl text-bold w-72'>{title}</h2>}
                {category && <p>{category}</p>}
                <div className='flex justify-between mt-2 '>
                    {price && <span>${price}</span>}
                    <Link href={`/user/shop/${_id}`}>
                        <button className="bg-[#27589c] text-white px-3 py-0.5 rounded-full hover:bg-[#294775]">
                            View Details
                        </button>
                        </Link>

                </div>
            </div>
        </div>

    );
};
export default Card