// src/components/NavBar.jsx
import React from 'react';
import logo from '../Assets/logo.png'
const NavBar = () => {
    return (
      <nav className="flex justify-between items-center bg-white text-black h-20 px-2 sm:px-6 md:px-10 lg:px-20">
      <div className="flex-1 items-center flex-shrink-0">
      <img
          src={logo}
          alt="Logo"
          className="h-8 w-40 sm:h-10 sm:w-36 md:w-40 lg:w-[178px] lg:h-[58px] 500:h-20 500:w-40" // Increased size for screens over 500px
        />
      </div>

      <div className="flex-grow flex justify-end lg:justify-center ">
      <ul className="flex space-x-4 items-center md:space-x-[40px]">
          <li>
            <a
              href="#about"
              className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg leading-5"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg leading-5"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:underline text-xs sm:text-sm md:text-base lg:text-lg leading-5"
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center ml-4 md:ml-6 lg:ml-8 pr-4 md:pr-8 lg:pr-20">
        <a
          href="#quote"
          className="bg-white hover:bg-gray-200 text-black rounded-full shadow flex items-center justify-center px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg leading-5 whitespace-nowrap"
        >
          Get a Free Quote
        </a>
      </div>

    </nav>
  
    );
};

export default NavBar;
