import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Products from './components/products/products/products';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function RouteSwitch() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  useEffect(() => {
    const updateMedia = () => {
      setDesktop(window.innerWidth > 800);
      return () => window.removeEventListener('resize', updateMedia);
    };

    window.addEventListener('resize', updateMedia);
  });

  return (
    <BrowserRouter>
      <div id='app-cont'>
        <Navbar />
        <Routes>
          <Route
            path='/products'
            element={<Products isDesktop={isDesktop} />}
          />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default RouteSwitch;
