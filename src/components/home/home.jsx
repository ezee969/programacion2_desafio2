import FirstSection from './first_section/first_section';
import SecondSection from './second_section/second_section';
import ThirdSection from './third_section/third_Section';
import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id='show-home'
    >
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </motion.div>
  );
}
