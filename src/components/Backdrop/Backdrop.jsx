import React from 'react';
import { motion } from 'framer-motion';

const Backdrop = ({ children, handleOpenCloseBut }) => {
  return (
    <motion.div
      onClick={handleOpenCloseBut}
      className='absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-60'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
