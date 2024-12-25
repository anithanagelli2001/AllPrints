// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button'; // Adjusted to relative path

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/assets/logo1.jpg" alt="aa" className=''/>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">AllPrints</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ml-4 ">
              <Link to="/" className="text-green-400 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Home</Link>
              <Link to="/services" className="text-pink-600 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Services</Link>
              <Link to="/process" className="text-sky-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Process</Link>
              <Link to="/order" className="text-red-600 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Order Now</Link>
              <Link to="/contact" className="text-violet-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Contact Us</Link>
              <Link to="/reviews" className="text-orange-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Reviews</Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="outline" className="text-blue-600 hover:text-blue-500">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
