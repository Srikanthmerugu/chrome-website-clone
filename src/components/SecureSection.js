import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../styles/secure-section.scss';
import Navbar from './Navbar';

const SecureSection = () => {
  const sectionRef = useRef(null);
  // const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    // GSAP animation for the section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, scrollTrigger: sectionRef.current }
    );
    }, []);

   
    

   

   

  return (
    <div>
      {/* {isNavbarVisible && <Navbar />} */}
      <section ref={sectionRef} className="secure-section">
        <div className="content">
          <h2>Secure Browsing</h2>
          <p>Advanced security built into Chrome to protect your data.</p>
        </div>
      </section>
    </div>
  );
};

export default SecureSection;
