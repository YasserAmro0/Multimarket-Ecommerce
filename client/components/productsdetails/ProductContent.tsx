"use client"
import React, { useState } from 'react';
import Products from '../../app/assets/data/products';
import Image from 'next/image';
import Link from 'next/link';
import Reviews from './Reviews';

const ProductContent = ({ id }) => {
  const [isDescription, setIsDescription] = useState(true);
  const product = Products.find((product) => product.id === id);  
  if (!product) {
    // Handle the case where no matching product is found
    return <div>No product found with the provided id.</div>;
  }
  return (
    <div>
      <div className='container flex gap-40'>
        <div>
          <Image src={product.imgUrl} height={600} width={600} alt='Image product' />
        </div>
        <div>
          <h2>{product.productName}</h2>
          {/* Rating */}
          <div className='flex mt-5'>
            <span className='mr-32'>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-line"></i>
            <i className="ri-star-line"></i>

          </span>
            <span>({ product.avgRating} Rating)</span>
          </div>
          {/* Price  */}
          <div className='flex mt-8 '>
            <span className='text-xl mr-32'>${product.price}</span>
            <span>Category : {product.category}</span>
          </div>
          
          {/* DescriptionShort with Button */}
          <p className='mt-4'>{product.shortDesc}</p>
          {/* Button */}
          <Link href='/cart'>
          <button className='bg-[#0A1D37] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-6'>
            add to Cart
            </button>
          </Link>

        </div>
      </div>


      <div className=' mt-8'>
        <div className='container'>
          {/* button switch */}
          <div className='flex gap-8'>
            <button
              className={isDescription ? 'text-[#0A1D37] text-bold' : ''}
              onClick={() => setIsDescription(true)}>
              Description
            </button>
            <button
              className={!isDescription ? 'text-[#0A1D37] text-bold' : ''}
              onClick={() => setIsDescription(false)}>
              Reviews (2)
            </button>
          </div>
          {/* description or reviews */}
          <div className='mt-4'>
            {
              isDescription ? <p>{product.description}</p> : <Reviews/>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;