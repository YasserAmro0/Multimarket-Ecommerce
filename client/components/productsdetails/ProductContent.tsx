"use client"
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Reviews from './Reviews';
import imageNoProduct from '../../app/assets/images/no-products.jpg'
import { ProductsProps, ReviewsType } from '@/types';
import { userDataContext } from '@/context';
import Modal from '../Modal';
import { ToastContainer, toast } from 'react-toastify';
import axiosInstance from '@/utils/api/axios';
import { usePathname } from 'next/navigation';



const ProductContent = ({ product }: {product: ProductsProps }) => {
  const [isDescription, setIsDescription] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<ReviewsType[]>([]);

  const pathname = usePathname();

  const userContext = useContext(userDataContext);

  const handleAddToCart = async () => {
    if (!userContext?.userData) {
      setIsLoginPage(false)
      setIsLoginModalOpen(true);
      toast.info("login before adding to cart");
    }
    const pathnameParts = pathname.split('/');
    const id = pathnameParts[pathnameParts.length - 1];
    setIsLoading(true); 
 
      await axiosInstance.post(`cart/addToCart/${id}`, {
        quantity: parseInt(`${quantity}`),
      });
    toast.success('add to cart successfully 🎉');
    setIsLoading(false);
    
  }


  const fetchReviews = async () => {
    const pathnameParts = pathname.split('/');
    const id = pathnameParts[pathnameParts.length - 1];
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(`review/${id}`);
      setReviews(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchReviews();
  }, []);

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
          <Image src={product.imageurl ?? ''} height={650} width={650} alt='Image product' />
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
              min='1' 
              value={quantity} 
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              className='border border-gray-300 p-1 rounded w-24'
            />
          </div>
          <p className='mt-4'>{product.shortDescription}</p>
          {/* Button */}
          <button
            className="bg-[#0A1D37] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-6" 
            onClick={handleAddToCart}
          >
             Add to Cart
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
      </div>

      <ToastContainer />
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
              Reviews ({reviews.length})
            </button>
          </div>
          {/* description or reviews */}
          <div className='mt-4'>
            {
              isDescription ? <p>{product.description}</p>
                : <Reviews
                  fetchReviews={fetchReviews}
                  reviews={reviews}
                  isLoading={isLoading}
                  setReviews={setReviews}
                />
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;