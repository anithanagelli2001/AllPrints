// src/components/ui/input.jsx
import React from 'react';

export const Input = ({ className, ...props }) => {
  return (
    <input
      className={`border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};
