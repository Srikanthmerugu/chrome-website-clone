import React from 'react';
import './styles/global.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
// import SpeedSection from './components/SpeedSection';
import SecureSection from './components/SecureSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      {/* <SpeedSection /> */}
      <SecureSection />
      <Footer />
    </div>
  );
}

export default App;
