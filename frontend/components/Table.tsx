import React from 'react';
import Image from 'next/image';
import cartImageBackground from '../app/assets/images/cartImageBackground.jpg';

const Table = () => {
  return (
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
                          <Image src={cartImageBackground} alt="Product Image" width={300} height={300} className="h-20 w-20" />
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">Amazon Brand Modern Sofa</td>
                      <td className="px-6 py-4 whitespace-no-wrap">$19.99</td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                          <input type="number" className="w-16 border rounded-md py-1 px-2" placeholder='1' />
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-full">Delete</button>
                      </td>
                  </tr>

              </tbody>
          </table>
      </div>
  )
}

export default Table;