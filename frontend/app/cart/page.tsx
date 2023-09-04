import React from 'react';
import Image from 'next/image';
import cartImageBackground from '../assets/images/cartImageBackground.jpg';
import Link from 'next/link';


const page = () => {
  return (
      <><div>
          {/* Hero section */}
          <div>
              <div>
                  <div className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                      <h1 className="text-white text-bold"> Shopping Cart</h1>
                  </div>
                  <div className="relative w-full h-48">
                      <Image src={cartImageBackground} className="w-full h-48 object-cover" alt="ProductPageImage" />
                      <div className="absolute top-0 left-0 w-full h-48 bg-black bg-opacity-50 z-0"></div>
                  </div>

              </div>
          </div>
      </div>
          <div className='flex justify-between container'>
              <div className="mt-10 ">
                  <table className="min-w-full">
                      <thead>
                          <tr>
                              <th>Image</th>
                              <th>Title</th>
                              <th>Price</th>
                              <th>Qty</th>
                              <th className="px-6 py-3 bg-gray-100">action</th>
                          </tr>
                      </thead>
                      <tbody className="bg-white">
                          <tr>
                              <td className="px-6 py-4 whitespace-no-wrap">
                                  <Image src={cartImageBackground} alt="Product Image" width={300} height={300} className="h-20 w-20"/>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap">Amazon Brand Modern Sofa</td>
                              <td className="px-6 py-4 whitespace-no-wrap">$19.99</td>
                              <td className="px-6 py-4 whitespace-no-wrap">
                                  <input type="number" className="w-16 border rounded-md py-1 px-2" placeholder='1'/>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap">
                                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-full">Delete</button>
                              </td>
                          </tr>
                         
                      </tbody>
                  </table>
              </div>

              {/* Subtotal and two button  Checkout or continue shopping */}
              <div>
                  <div className='container flex justify-between items-center'>
                      <h2>Subtotal</h2>
                      <span className='text-bold'>$504</span>
                  </div>
                  <p>taxes and shipping will calculate in 
                      Checkout.
                  </p>
                  <div className='flex gap-1'>
                      <button className='bg-[#0A1D37] hover:bg-blue-900 text-white font-bold py-2 px-12 rounded mt-6'>Checkout</button>
                      
                      <Link href='/shop' className='bg-[#0A1D37] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-6'>
                          continue shopping
                      </Link>
                  </div>
              </div>

          </div>
      </>

    
  )
}

export default page