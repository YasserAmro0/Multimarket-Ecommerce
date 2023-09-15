import React from 'react';
import Image from 'next/image';
import { ProductsProps } from '@/types';
import Link from 'next/link';

const Card = ({ title, imageurl, category, price, index, _id }: ProductsProps) => {
    return (
        <div className='container w-72 h-full shadow-lg p-4 relative' key={index}>
            <Link href={`/user/shop/${_id}`}>
                <div className='transition-transform transform hover:scale-105'>
                    {imageurl && (
                        <Image
                            src={imageurl}
                            alt="Arm Chairs"
                            width={300}
                            height={300}
                        />
                    )}
                </div>
            </Link>
            <div>
                {title && <h2 className='text-xl text-bold w-72'>{title}</h2>}
                {category && <p>{category}</p>}
                <div className='flex justify-between  '>
                    {price && <span>${price}</span>}
                    <i className="ri-add-circle-fill text-3xl cursor-pointer hover:text-slate-700"></i>
                </div>
            </div>
        </div>
    );
};
export default Card