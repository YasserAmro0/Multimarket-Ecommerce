import React from 'react'
import Image from 'next/image'
import ImageBackground from '../../../assets/images/ImageBackgound.jpg';
import { ProductContent } from '@/components';
import products from '@/app/assets/data/products';


const page = ({ params }) => {
  const NameProduct = products.find((product) => product.id === params.id);  

  return (
    <div>
      {/* Hero section */}
      <div>
        <div className=" ">
          <div className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <h1 className="text-white text-bold">{NameProduct?.productName}</h1>
          </div>
          <div className="relative w-full h-48">
            <Image src={ImageBackground} className="w-full h-48 object-cover" alt="ProductPageImage" />
            <div className="absolute top-0 left-0 w-full h-48 bg-black bg-opacity-50 z-0"></div>
          </div>
        </div>
      </div>
      {/* content of product */}
      <ProductContent id={params.id} />
      
    </div>
  )
}

export default page