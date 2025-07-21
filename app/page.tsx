'use client';

import About from './components/About';
import Header from './components/Header';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', '');
    }
  }, [isDarkMode]);

  return (
    <>
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
      {/* <h1>Hello World</h1> */}
    </>
  );
}
