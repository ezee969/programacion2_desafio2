import React from 'react';
import bgImg from '../../utils/imgs/home-bg.png';

export default function NotFound() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className='px-5 flex flex-col justify-center h-[86.1vh] bg-cover'
    >
      <p className='py-10 text-5xl font-medium text-center lg:text-7xl bg-gray-50 text-slate-900'>
        404 Page Not Found
      </p>
    </div>
  );
}
