// src/components/Contact.jsx
import React from 'react';
import { Button } from './ui/button'; // Adjusted to relative path
import { Input } from './ui/input'; // Adjusted to relative path
import { Label } from './ui/label'; // Adjusted to relative path
import { Textarea } from './ui/textarea'; // Adjusted to relative path

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12 font-serif">
      <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <Label htmlFor="name" className="text-gray-700">Name</Label>
          <Input id="name" type="text" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email" className="text-gray-700">Email</Label>
          <Input id="email" type="email" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="message" className="text-gray-700">Message</Label>
          <Textarea id="message" required className="mt-1" />
        </div>
        <Button type="submit" className="bg-gradient-to-l from-purple-500 to-blue-500 text-white rounded-lg shadow-md">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
