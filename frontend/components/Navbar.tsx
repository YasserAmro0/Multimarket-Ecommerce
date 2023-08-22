"use client"

import Link from 'next/link'
import Image from 'next/image';
import logoImage from '../app/assets/images/eco-logo.png';
import { useState } from 'react';

const Navbar = () => {
    const [isExpanded, toggleExpansion] = useState(false);
    const toggleMenu = () => {
        toggleExpansion(!isExpanded);
    };
    return (
        <div className='bg-gray-50  shadow-md'>
            <div className='container flex justify-between'>
                {/* Logo */}
                <div className='flex gap-2'>
                    <Image
                        src={logoImage}
                        width={24}
                        height={24}
                        alt='logo'
                    />
                    <h3 className='text-xl font-bold'>
                        Multimarkt
                    </h3>
                </div>

                {/* links  */}
                <div className='flex justify-between'>
                    <ul className="flex space-x-8">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/shop'>Shop</Link>
                        </li>
                        <li>
                            <Link href='/cart'>Cart</Link>
                        </li>
                    </ul>
                </div>


                {/* Icons */}
                <div className='flex justify-between space-x-4'>
                    <i className="ri-heart-line text-xl cursor-pointer"></i>
                    <i className="ri-shopping-cart-line text-xl cursor-pointer"></i>
                    <i className="ri-menu-line text-xl cursor-pointer" onClick={toggleMenu}></i>
                    <div id="menuDropdown" className={` absolute ${isExpanded ? '' : 'hidden' } bg-gray-50 p-4 rounded shadow-md right-20 top-12`}>
                        <ul className='px-4'>
                            <li>
                                <Link href='/login'>
                                    Login
                                </Link>
                            </li>
                            <li className='border-t-2 w-full'>
                                <Link href='/signup'>
                                    SignUp
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>



            </div>

        </div>
    );
    
}
    

export default Navbar;
