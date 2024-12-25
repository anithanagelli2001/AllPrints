import React from 'react';
import { Palette, Printer, Truck } from 'lucide-react';

const ProcessStep = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md font-serif">
    {/* Conditional rendering: check if 'Icon' is an image URL or a React component */}
    {typeof Icon === 'string' ? (
      <img src={Icon} alt={title} className="w-50 h-50 mb-4" />
    ) : (
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
    )}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Process = () => {
  const steps = [
    { icon: '/assets/design1.jpg', title: 'Design', description: 'Work with our designers to create your perfect print' },
    { icon: '/assets/print1.jpg', title: 'Print', description: 'We use state-of-the-art printers for high-quality results' },
    { icon: '/assets/delivery.png', title: 'Deliver', description: 'Fast and reliable delivery to your doorstep' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-serif">
      <h2 className="text-3xl font-bold text-white mb-8">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <ProcessStep key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default Process;
