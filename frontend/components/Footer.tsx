import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-900 py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="text-gray-400">
          <h2 className="text-xl font-semibold text-white">Multimarkt</h2>
          <p className="mt-2 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            Velit exercitationem incidunt provident officia atque ve.
          </p>
        </div>

        {/* Top Categories */}
        <div className="text-gray-400">
          <h2 className="text-xl font-semibold text-white">Top Categories</h2>
          <ul className="mt-2 space-y-2">
            <li>Mobil Phone</li>
            <li>Modern Sofa</li>
            <li>Arm Chair</li>
            <li>Smart Watches</li>
          </ul>
        </div>

        {/* UseFull Links */}
        <div className="text-gray-400">
          <h2 className="text-xl font-semibold text-white">Useful Links</h2>
          <ul className="mt-2 space-y-2">
            <li>Shop</li>
            <li>Cart</li>
            <li>Login</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div className='text-gray-400'>
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center">
              <i className="ri-map-pin-line mr-2"></i>
              194A/8D New York City, US.
            </li>
            <li className="flex items-center">
              <i className="ri-mail-line mr-2"></i>
              Multimarkt@gmail.com
            </li>
            <li className="flex items-center">
              <i className="ri-phone-fill mr-2"></i>
              (+972) 59-7715-729
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom Area */}
      <div className="text-center text-gray-400 mt-8">
        &copy; 2023 Developer By Eng:Yasser Abu Amro. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;