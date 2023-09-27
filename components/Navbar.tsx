"use client"
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../app/assets/images/eco-logo.png';
import { useContext, useState } from 'react';
import Modal from './Modal';
import { usePathname, useRouter } from 'next/navigation'; // Updated import statement
import { userDataContext } from '@/context';

const Navbar = () => {
    const [isExpanded, toggleExpansion] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoginPage, setLoginPage] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const userContext = useContext(userDataContext);
    const router = useRouter();
    const pathname = usePathname(); // Updated hook name
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuLinks = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        userContext?.setUserData(null);
        router.push('/', { scroll: false })// Updated router.push
    };

    const toggleMenu = () => {
        toggleExpansion(!isExpanded);
    };

    return (
        <div className="bg-gray-50 shadow-md">
            <div className="container flex justify-between">
                {/* Logo */}
                <Link href="/">
                    <div className="flex gap-2">
                        <Image src={logoImage} width={24} height={24} alt="logo" />
                        <h3 className="text-xl font-bold">Multimarkt</h3>
                    </div>
                </Link>

                <div className="hidden md:flex md:justify-between">
                    <ul className="flex space-x-1 md:space-x-8">
                        <li className={pathname === '/' ? 'text-bold text-[#0A1D37]' : ''}>
                            <Link href="/">Home</Link>
                        </li>
                        <li
                            className={
                                pathname === '/user/shop' ? 'text-bold text-[#0A1D37]' : ''
                            }
                        >
                            <Link href="/user/shop">Shop</Link>
                        </li>
                        <li
                            className={
                                pathname === '/user/cart' ? 'text-bold text-[#0A1D37]' : ''
                            }
                        >
                            <Link href="/user/cart">Cart</Link>
                        </li>
                    </ul>
                </div>

                {/* Icons */}
                <div className="flex md:justify-between md:space-x-2">
                    <Link href="/user/cart">
                        <div className=" icon-container relative">
                            <i className="ri-shopping-cart-line text-xl cursor-pointer"></i>
                        </div>
                    </Link>
                    {userContext?.userData ? (
                        <div className="relative">
                            <div
                                className="icon-container relative cursor-pointer flex justify-between ri-align-center"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <p className="text-[#0A1D37] pl-2">
                                    {userContext?.userData.username}
                                </p>
                            </div>
                            {dropdownOpen && (
                                <div className="absolute bg-gray-50 p-4 rounded shadow-md right-0 top-12 z-10">
                                    <ul>
                                        <li className={pathname === '/' ? 'font-bold text-blue-800' : 'text-gray-700'}>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className={pathname === '/user/shop' ? 'font-bold text-blue-800' : 'text-gray-700'}>
                                            <Link href="/user/shop">Shop</Link>
                                        </li>
                                        <li className={pathname === '/user/cart' ? 'font-bold text-blue-800' : 'text-gray-700'}>
                                            <Link href="/user/cart">Cart</Link>
                                        </li>
                                        <li>
                                            <button onClick={handleLogout} className="flex items-center text-red-500 cursor-pointer">
                                                <i className="ri-logout-box-r-line mr-2"></i> Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                    
                        </div>
                    ) : (
                        <>
                            <i
                                className="ri-menu-line text-xl cursor-pointer"
                                onClick={toggleMenu}
                            ></i>
                            <div
                                id="menuDropdown"
                                className={`absolute ${isExpanded ? '' : 'hidden'
                                    } bg-gray-50 p-4 rounded shadow-md right-20 top-12 z-10`}
                            >
                                <ul className="px-4">
                                    <li>
                                        <button
                                            onClick={() => {
                                                setIsOpen(true);
                                                setLoginPage(true);
                                                toggleExpansion(false);
                                            }}
                                        >
                                            Login
                                        </button>
                                    </li>
                                    <li className="border-t-2 w-full">
                                        <button
                                            onClick={() => {
                                                setIsOpen(true);
                                                setLoginPage(false);
                                                toggleExpansion(false);
                                            }}
                                        >
                                            SignUp
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>

        
            <Modal
                isOpen={isOpen}
                closeModel={() => setIsOpen(false)}
                isLoginPage={isLoginPage}
                setLoginPage={setLoginPage}
                setIsOpen={setIsOpen}
            />
        </div>
    );
};

export default Navbar;