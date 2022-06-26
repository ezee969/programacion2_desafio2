import React from 'react';

export default function Question({ children }) {
  return (
    <p className='text-lg font-medium border-b-2 cursor-pointer xl:text-xl'>
      {children}
    </p>
  );
}
