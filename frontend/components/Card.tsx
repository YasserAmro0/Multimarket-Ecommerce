import React from 'react';
import Image from 'next/image';
import { ProductsProps } from '@/types';
import Link from 'next/link';

const Card = ({ productName, imgUrl, category, price,index,id }: ProductsProps) => {
  return (
     
      
          <div className='container w-72 h-full shadow-lg p-4 relative' key={index}>
          <Link href={`/user/shop/${id}`}>
              <div className='transition-transform transform hover:scale-105'>
                  <Image
                      src={imgUrl}
                      alt="Arm Chairs"
                      width={300}
                      height={300}
                  />
              </div>
          </Link>
              <div>
                  <h2 className='text-xl text-bold w-72'>{productName}</h2>
                  <p>{category }</p>
              <div className='flex justify-between  '>
                      <span>${price}</span>
                      <i className="ri-add-circle-fill text-3xl cursor-pointer hover:text-slate-700"></i>
                  </div>
                  
              </div>
              
          </div>
      
  )
}

export default Card