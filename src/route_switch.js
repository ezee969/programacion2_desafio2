import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import Products from './components/products/products/products';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Faq from './components/FAQ/Faq';
import NotFound from './components/NotFound/NotFound';
import Sucess from './components/Success/Sucess';

function RouteSwitch() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);
  const [showTerms, setShowTerms] = useState(true);
  const baseUrl = '/programacion2_desafio2';

  useEffect(() => {
    const updateMedia = () => {
      setDesktop(window.innerWidth > 800);
      return () => window.removeEventListener('resize', updateMedia);
    };

    window.addEventListener('resize', updateMedia);
  });

  return (
    <div className='h-screen'>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <AnimatePresence
          initial={true}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {showTerms && <TermsAndConditions setShowTerms={setShowTerms} />}
        </AnimatePresence>
        <Routes>
          <Route path={`/`} element={showTerms ? null : <Home />} />
          <Route path={`${baseUrl}/faq`} element={<Faq />} />
          <Route
            path={`${baseUrl}/products`}
            element={<Products isDesktop={isDesktop} />}
          />
          <Route path={`${baseUrl}/success`} element={<Sucess />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default RouteSwitch;
