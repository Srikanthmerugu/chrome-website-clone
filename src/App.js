import React, { useState, useEffect } from 'react';
import './styles/global.scss';
import HeroSection from './components/HeroSection';
import SecureSection from './components/SecureSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Updates from './components/Updates';

function App() {
 

  return (
    <div className="App">
      <HeroSection />
{/* <Navbar/>       */}
<Updates/>
{/* <SecureSection /> */}

      <Footer />
    </div>
  );
}

export default App;
