import React from 'react'

const Tag = ({ children, className = '' }) => {
  return (
    <span className={`inline-block px-4 py-1 pb-1.5 bg-gray-900 text-white border border-gray-600 rounded-r-full rounded-l-full  overflow-hidden ${className}`}>
   
      {children}
    </span>
  );
};

export default Tag