"use client"
import products from '@/app/assets/data/products'
import React, { useState } from 'react'
import Card from './Card'

const ShopProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
      <><div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container'>
          {currentProducts.map((item, index) => <Card
              index={index}
              productName={item.productName}
              imgUrl={item.imgUrl}
              category={item.category}
              price={item.price} />
          )}
      </div>
          <div className='container  flex justify-between mt-4'>
              <div className='text-bold text-[#0A1D37]'>
                  {`Showing ${currentPage} to ${Math.ceil(products.length/8)} of results ${products.length}`}
              </div>

              <div>
              <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`mx-2 px-4 py-2 ${currentPage === 1 ? 'bg-gray-400' :'bg-[#0A1D37]'}  text-white rounded`}
              >
                  {"<"}
              </button>
              <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={indexOfLastProduct >= products.length}
                      className={`mx-2 px-4 py-2  text-white rounded ${indexOfLastProduct >= products.length ? 'bg-gray-400' :'bg-[#0A1D37]'}`}
              >
                  {">"}
                  </button>
              </div>
          </div>
      </>
  )
}

export default ShopProducts