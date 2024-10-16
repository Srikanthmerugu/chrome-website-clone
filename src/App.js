import React, { useState, useEffect } from 'react';
import './styles/global.scss';
import HeroSection from './components/HeroSection';
import SecureSection from './components/SecureSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [isHeroCompleted, setIsHeroCompleted] = useState(false);

  const handleHeroComplete = () => {
    setIsHeroCompleted(true);  
  };

  return (
    <div className="App">
      <HeroSection />
      {isHeroCompleted && <Navbar />} 
      {/* <SecureSection /> */}
      <Footer />
    </div>
  );
}

export default App;
