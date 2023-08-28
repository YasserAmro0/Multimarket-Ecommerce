import Image from 'next/image'
import React from 'react'
import ProductImagePage from '../assets/images/bedroom.jpg';
import { FilterByCategory, SortByPrice, SearchProducts } from '@/components';

const page = () => {
  return (
    <>
      {/* Hero section */}
      <div>
      <div className=" ">
        <div className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-white text-bold">Products</h1>
        </div>
          <div className="relative w-full h-48">
            <Image src={ProductImagePage} className="w-full h-48 object-cover" alt="ProductPageImage" />
            <div className="absolute top-0 left-0 w-full h-48 bg-black bg-opacity-50 z-0"></div>
        </div>
        </div>
      </div>
      {/* Filter section */}
      <div className='mt-12'>
        <div className='container flex justify-between'>
        <div>
          <FilterByCategory />
        </div>
        <div className='flex gap-2'>
          <SortByPrice />
          <SearchProducts />
          </div>
        </div>
      </div>
    </>
    
  )
}

export default page