// src/components/ui/button.jsx
import React from 'react';

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={`px-6 py-3 rounded-md font-semibold focus:outline-none ${className}`} {...props}>
      {children}
    </button>
  );
};
