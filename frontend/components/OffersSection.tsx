"use client"
import { getTimeLeft } from '@/utils';
import moment from 'moment';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ImageOffers from '../app/assets/images/counter-timer-img.png'

const OffersSection = () => {
 
    const targetDate = moment("2023-09-10");
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            const newTimeLeft = getTimeLeft(targetDate);
            setTimeLeft(newTimeLeft);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [timeLeft]);
    

  return (
      <div className='full-w bg-slate-950 my-6'>
          <div className='container flex justify-between'>
              {/* content */}
              <div className='mt-6'>
                  <p>Limited Offers</p>
                  <h2 className='text-gray-300 text-bold py-6'>Quality Armchair</h2>
                  <div className="text-gray-300 text-2xl">
                      <span className="font-semibold ">{timeLeft.days}</span>
                      <span className="mr-1 text-sm pr-2">Days</span>
                      <span> : </span>
                      <span className="font-semibold">{timeLeft.hours}</span>
                      <span className="mr-1 text-sm pr-2">Hours</span>
                      <span> : </span>
                      <span className="font-semibold">{timeLeft.minutes}</span>
                      <span className="mr-1 text-sm">Minutes</span>
                  </div>               
              </div>
              {/* Image */}
              <div>
              <Image
                  src={ImageOffers}
                  width={350}
                  height={350}
                  alt='offersImage'
              />
              
                  
              </div>
          </div>
    </div>
  )
}

export default OffersSection