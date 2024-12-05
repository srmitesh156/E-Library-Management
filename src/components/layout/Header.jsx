
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
        
          <div className="text-2xl font-bold flex items-center">
            <img src="public/images/e-library-logo.jpg" alt="E-Library Logo" className="w-30 h-20 mr-2 mt-5"  />
            {/* <a href="#">E-Library</a> */}
          </div>

          {/* Toggle Button (Mobile) */}
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Menu Items */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex md:items-center w-full md:w-auto`}
          >
            <ul className="md:flex md:space-x-6">
              <li className="py-2 md:py-0">
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li className="py-2 md:py-0 relative group">
                <a href="#" className="hover:text-gray-300">
                  Browse
                </a>
                <ul className="absolute hidden group-hover:block bg-blue-700 mt-2 space-y-2 p-2 shadow-md">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-blue-600">
                      Books
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-blue-600">
                      Authors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-blue-600">
                      Genres
                    </a>
                  </li>
                </ul>
              </li>
              <li className="py-2 md:py-0">
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li className="py-2 md:py-0">
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Search Bar */}
        {/* <div className="mt-4 md:mt-0 md:flex md:justify-center">
          <form className="flex items-center w-full md:w-2/3  bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search by author, genre, or publication date"
              className="w-full px-4 py-2 text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 hover:bg-blue-800"
            >
              Search
            </button>
          </form>
        </div> */}
        
      </div>
    </nav>
  );
};

export default Header;
