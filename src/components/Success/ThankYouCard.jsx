import React from 'react';

export default function ThankYouCard() {
  return (
    <div className='flex flex-col items-center xl:absolute xl:top-60 xl:left-40'>
      <div className='w-1/3 h-1 border-t-2 border-white' />
      <div className='flex flex-col items-center gap-8 px-6 py-8'>
        <p className='text-5xl font-medium tracking-tight text-center text-white lg:max-w-2xl xl:text-6xl '>
          THANK YOU FOR YOUR PURCHASE, WE'LL BE IN TOUCH SHORTLY
        </p>
        <button className='px-4 py-3 font-semibold text-green-700 transition-all border border-green-500 rounded shadow md:w-fit hover:bg-green-500 active:shadow-none hover:text-white hover:border-transparent'>
          READ OUR RECENT TESTIMONIALS
        </button>
      </div>
      <div className='w-1/3 h-1 border-t-2 border-white' />
    </div>
  );
}
