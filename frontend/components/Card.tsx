import React from 'react';
import Image from 'next/image';
import imageChair from '../app/assets/images/arm-chair-03.jpg'
import { ProductsProps } from '@/types';
import Link from 'next/link';

const Card = ({ productName, imgUrl, category, price,index }: ProductsProps) => {
  return (
     
      
          <div className='container w-72 h-full shadow-lg p-4 relative' key={index}>
          <i className="ri-heart-fill text-2xl cursor-pointer absolute top-2
                text-slate-400 hover:text-[#0A1D37] z-10"></i>
          <Link href={`/shop/${index}`}>
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