import React, { useState, useEffect } from "react";
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

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MovingImages />
      {/* <Navbar /> */}
      <Updates />
      <StaySafe />
      <SecureSection /> 
      <FAQ />
      <DownloadChrome />
      <Footer />
    </div>
  );
}

export default App;
