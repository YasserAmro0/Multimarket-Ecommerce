import React from 'react';
import Image from 'next/image';
import HeroImage from '../app/assets/images/hero-img.png';
import Link from 'next/link';
const Hero = () => {
    return (
        <div className='bg-blue-200 h-full pt-24 pb-6'>
            <div className='container flex '>
                {/* text about hero section */}
                <div>
                    <p className='pb-6'>trending Product in 2023</p>
                    <h2 className='pb-4 font-bold'>
                        Make your Interior More ,<br />
                        Minimalistic & Modern
                    </h2>
                    <p className='pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores aperiam temporibus vero
                        dolorum beatae perferendis incidunt soluta placeat harum eius. Est, ducimus praesentium.
                    </p>
                    <Link href='/shop'>
                        <button
                            className='bg-[#0A1D37] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'
                        >

                            SHOP NOW
                        </button>
                    </Link>
                </div>

                {/* Image */}
                <div>
                    <Image
                        src={HeroImage}
                        width={900}
                        height={900}
                        alt='hero'

                    />

                </div>
            </div>

        </div>
    )
}

export default Hero