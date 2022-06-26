import React from 'react';
import QA from './QA';
import { QAs } from './QAs';
import { motion } from 'framer-motion';

export default function Faq() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='flex flex-col w-full min-h-screen gap-2 px-3 py-6 bg-gray-50 md:px-7 md:py-10 lg:px-12 xl:py-16 xl:px-24 2xl:px-40'
    >
      <div className='px-4 py-8'>
        <p className='mb-2 text-xl font-semibold md:text-2xl xl:text-4xl'>
          Frequent questions (FAQ)
        </p>
        <div className='flex flex-col gap-7'>
          {QAs.map((qAa) => (
            <QA question={qAa.question} answer={qAa.answer} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
