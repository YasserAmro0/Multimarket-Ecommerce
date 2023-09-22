import React from 'react'
import Notfound from './assets/images/404-error (1).jpg';
import Image from 'next/image';

const NotFound = () => {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className=" text-white p-4">
              <Image
                  src={Notfound}
                  width={600}
                  height={600}
                  alt='not found'
              />
          </div>
      </div>
  )
}

export default NotFound;