import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../styles/secure-section.scss';
import Navbar from './Navbar';

const SecureSection = () => {
  const sectionRef = useRef(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    // GSAP animation for the section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, scrollTrigger: sectionRef.current }
    );

    // IntersectionObserver to detect when 70% of the section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavbarVisible(entry.isIntersecting);
      },
      { threshold: 0.9 } // 70% of the section needs to be visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      {isNavbarVisible && <Navbar />}
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
