"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reviews from './Reviews';
import imageNoProduct from '../../app/assets/images/no-products.jpg'
import { ProductsProps } from '@/types';

const ProductContent = ({ product }: {product: ProductsProps }) => {
  const [isDescription, setIsDescription] = useState(true);
  const [quantity, setQuantity] = useState(1);
  

  if (!product) {
    return <div className='flex justify-center'>
      <Image
        src={imageNoProduct}
        width={500}
        height={500}
        alt='no product'
      />
    </div>;
  }
  return (
    <div>
      <div className='container flex gap-40'>
        <div>
          <Image src={product.imageurl ?? ''} height={600} width={600} alt='Image product' />
        </div>
        <div>
          <h2>{product.title}</h2>
          {/* Rating */}
          <div className='flex mt-5'>
            <span className='mr-32 text-yellow-500'>
              <i className="ri-star-fill "></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-line"></i>
              <i className="ri-star-line"></i>

            </span>
          </div>
          {/* Price  */}
         
          <div className='flex mt-8 '>
            <span className='text-xl mr-32'>${product.price}</span>
            <span className='text-bold'>Category : {product.category}</span>
          </div>

          {/* DescriptionShort with Button */}
          <div className='flex mt-8'>
            <label className='mr-2 mt-1 text-bold'>Quantity:</label>
            <input
              type='number'
              min='1' // Set a minimum value (usually 1, as it represents the minimum quantity)
              value={quantity} // Bind this input to a quantity variable in your component state
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))} // Update the quantity when the user changes it
              className='border border-gray-300 p-1 rounded w-24'
            />
          </div>
          <p className='mt-4'>{product.shortDescription}</p>
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
              isDescription ? <p>{product.description}</p> : <Reviews />
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;