import React from 'react';
import ThankYouCard from './ThankYouCard';
import bgImg from '../../utils/imgs/success-bg.jpg';

export default function Sucess() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
      }}
      className='flex items-center h-[87vh] '
    >
      <ThankYouCard />
    </div>
  );
}
