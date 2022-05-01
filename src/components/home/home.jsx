import './home.css';
import FirstSection from './first_section/first_section';
import SecondSection from './second_section/second_section';
import ThirdSection from './third_section/third_Section';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  return (
    <main id={visible ? 'show-home' : 'hide-home'}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}
