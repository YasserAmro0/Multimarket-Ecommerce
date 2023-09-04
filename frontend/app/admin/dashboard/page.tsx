import Image from 'next/image';
import React from 'react';
import LogoImage from '../../assets/images/eco-logo.png'
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-[#111827] p-4 text-white">
        {/* Logo */}
        <div className="flex items-start justify-start mb-6 gap-6 border-b-2">
          <Image src={LogoImage} alt="Logo" width={40} height={40} className=" bg-white" />
          <h1 className='text-white '>Multimarkt</h1>
        </div>

        {/* Button Links */}
        <div className="mb-6 flex flex-col justify-end ">
          <Link href="/products" className="block py-2 pl-2 text-gray-400 rounded-lg  hover:text-white hover:bg-teal-600">
            Products
          </Link>
          <Link href="/reviewers" className="block py-2  pl-2 text-gray-400 rounded-lg  hover:text-white hover:bg-teal-600">
            Reviewers
          </Link>
          <Link href="/addproduct" className="block py-2  pl-2 text-gray-400 rounded-lg  hover:text-white hover:bg-teal-600">
            Add Product
          </Link>
        </div>

        {/* Exit Button */}
        <div className="flex flex-col justify-end mt-[160%]">
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">
            Exit      {`->`}
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <table className="table-auto w-full">
          {/* Table content goes here */}
          <thead>
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Action</th>

              
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Data 1</td>
              <td className="border px-4 py-2">Data 2</td>
              <td className="border px-4 py-2">Data 2</td>
              <td className="border px-4 py-2">Data 2</td>
              <td className='border px-4 py-2'>
                <button type='submit'>Edit</button>
                <button>Delete</button>
              </td>

              {/* Add more data cells as needed */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page