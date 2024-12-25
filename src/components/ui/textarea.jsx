// src/components/ui/textarea.jsx
import React from 'react';

export const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={`border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};
