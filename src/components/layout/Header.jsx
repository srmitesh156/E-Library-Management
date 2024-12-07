import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex justify-between items-center py-4">
         
          <div className="text-2xl font-bold flex items-center space-x-3">
            <img 
              src="public/images/e-library-logo.jpg" 
              alt="E-Library Logo" 
              className="w-30 h-20 object-cover"
            />
            {/* <span className="text-white font-extrabold text-xl">E-Library</span> */}
          </div>

         
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
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

      
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex md:items-center space-x-8 transition-all duration-300 ease-in-out`}
          >
            <ul className="flex space-x-6 md:space-x-8">
              <li className="py-2">
                <Link className="text-white hover:text-blue-200 transition-all duration-300" to="/">
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link className="text-white hover:text-blue-200 transition-all duration-300" to="/booklist">
                  My Books
                </Link>
              </li>
              <li className="py-2">
                <Link className="text-white hover:text-blue-200 transition-all duration-300" to="/bookdetails">
                  Action
                </Link>
              </li>
              <li className="py-2">
                <Link className="text-white hover:text-blue-200 transition-all duration-300" to="#">
                  Contact
                </Link>
              </li>
            </ul>

           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
