import React, { useState } from 'react';
import "./styles/global.scss";
import HeroSection from "./components/HeroSection";
import SecureSection from "./components/SecureSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Updates from "./components/Updates";
import FAQ from "./components/FAQ";
import DownloadChrome from "./components/DownloadChrome";
import Header from "./components/Header";
import StaySafe from "./components/StaySafe";
import MovingImages from "./components/MovingImages";
import BrowserBuilt from "./components/BrowserBuilt";
import Preloader from './components/Preloader'; 

function Home() {
  const [loading, setLoading] = useState(true); 

  if (loading) {
    return <Preloader setLoading={setLoading} />;
  }

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Navbar />
      <MovingImages />
      <Updates />
      <StaySafe />
      {/* <SecureSection />  */}
      <BrowserBuilt />
      <FAQ />
      <DownloadChrome />
      <Footer />
    </div>
  );
}

export default Home;
