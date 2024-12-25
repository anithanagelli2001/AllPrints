// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">AllPrints</div>
          <div className="flex space-x-6">
            <a href="/services" className="hover:text-gray-400">Services</a>
            <a href="/process" className="hover:text-gray-400">Process</a>
            <a href="/order" className="hover:text-gray-400">Order</a>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
            <a href="/reviews" className="hover:text-gray-400">Reviews</a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AllPrints. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
