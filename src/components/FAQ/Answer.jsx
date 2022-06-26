import React from 'react';

export default function Answer({ children, selected }) {
  const content = 'max-h-0';
  const contentShow = 'h-auto max-h-screen';

  return (
    <p
      className={`text-base xl:text-lg ${
        selected ? contentShow : content
      } transition-all overflow-hidden`}
    >
      {children}
    </p>
  );
}
