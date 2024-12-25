// src/components/Order.jsx
import React from 'react';
import { Button } from './ui/button'; 
import { Input } from './ui/input';
import { Label } from './ui/label';

const Order = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("The order was placed successfully.")
    // Handle form submission
  };

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12 font-serif">
      <h2 className="text-3xl font-bold text-white mb-8">Place Your Order</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <Label htmlFor="company" className="text-gray-700">Company Name</Label>
          <Input id="company" type="text" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="contact" className="text-gray-700">Contact Number</Label>
          <Input id="contact" type="tel" required className="mt-1" />
        </div>
        <Button type="submit" className="bg-gradient-to-l from-purple-500 to-blue-500 text-white rounded-lg shadow-md">
          Submit Order
        </Button>
      </form>
    </div>
  );
};

export default Order;
