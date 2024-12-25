import React from 'react';
import { Coffee, Pizza, ShoppingBag } from 'lucide-react';

const ServiceItem = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md font-serif">
    {/* Check if the icon is a string (image) or a React component (icon) */}
    {typeof Icon === 'string' ? (
      <img src={Icon} alt={title} className="w-50 h-50 mb-4" />
    ) : (
      <Icon className="w-20 h-12 text-blue-500 mb-4" />
    )}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    { icon: '/assets/coffee.jpg', title: 'Coffee Cup Printing', description: 'Custom designs for your coffee shop needs' },
    { icon: '/assets/pizza.jpg', title: 'Pizza Box Printing', description: 'Stand out with unique pizza box designs' },
    { icon: '/assets/bag.jpg', title: 'Shopping Bag Printing', description: 'Eco-friendly bag printing solutions' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-serif">
      <h2 className="text-3xl font-bold text-white mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
