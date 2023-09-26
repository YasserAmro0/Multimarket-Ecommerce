import React, { Suspense } from 'react'
import Image from 'next/image'
import ImageBackground from '../../../assets/images/ImageBackgound.jpg';
import { ProductContent } from '@/components';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import axios from 'axios';
import NotFound from '@/app/not-found';


const page = async ({ params }: { params: Params }) => {
  let product;
  try {
    product = await axios.get(`${process.env.SERVER_URL}product/${params.id}`);
  } catch (error) {
    <NotFound/>
  }
  
 

  const lodaingJx = (
    <div className="text-center">
      <div className="spinner_status" role="status">
        <span className="spinner_loading">Loading...</span>
      </div>
    </div>
  )
  return (
    <div>
      {/* Hero section */}
      <div>
        <div className=" ">
          <div className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <Suspense fallback={lodaingJx}>
              <h1 className="text-white text-bold">{product?.data.data.title}</h1>
            </Suspense>
          </div>
          
          <div className="relative w-full h-48">
              <Image src={ImageBackground} className="w-full h-48 object-cover" alt="ProductPageImage" />
            <div className="absolute top-0 left-0 w-full h-48 bg-black bg-opacity-50 z-0"></div>
            </div>
        </div>
      </div>
      {/* content of product */}
        <ProductContent product={product?.data.data} />
    </div>
  )
}

export default page