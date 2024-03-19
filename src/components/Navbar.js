import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 py-4 lg:px-12 shadow border-solid border-t-2 border-blue-300">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0">
          {/* Wrap the image in an anchor tag with a link to your homepage */}
          <a href="/">  {/* Replace '/' with your actual home page path */}
            <img src="../images/logo.png" alt="Your Logo" className="h-8 w-8" />
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-white border-white hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="text-md font-bold text-white lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 navbar-link hover:bg-red-500 hover:text-white px-4 py-2 rounded">Movies</a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 navbar-link hover:bg-red-500 hover:text-white px-4 py-2 rounded">Series</a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 navbar-link hover:bg-red-500 hover:text-white px-4 py-2 rounded">Pricing plans</a>
        </div>
        <div className="relative mx-auto text-gray-600 lg:block hidden">
          <input
            className="border-2 border-gray-300 bg-gray-800 text-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button  type="submit" className="absolute right-0 top-0 mt-3 mr-2">
            <svg className="text-gray-600 h-16 w-16 fill-current" >
              <path d="./images/search-icon.webp"/>
            </svg>
          </button>
        </div>
        <div className="flex ">
          <a href="#" className="block text-md px-4 py-2 rounded text-blue-300 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-300 lg:mt-0">Sign in</a>
          <a href="#" className="block text-md px-4 ml-2 py-2 rounded text-blue-300 font-bold hover:text-white mt-4 hover:bg-blue-300 lg:mt-0">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
