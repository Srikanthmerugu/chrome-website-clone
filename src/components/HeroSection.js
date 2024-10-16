import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/hero-section.scss";

const HeroSection = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
    gsap.fromTo(
      subTitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );
  }, []);

  return (
    <>
      <div className="hero-topbar">
        <div className="hero-sub-container">
          <img src="https://www.google.com/chrome/static/images/v2/promo-banner/2024-08-cam/security.webp" />
          
          <p>
            Chrome blocks 3 million cyberattacks every day. Learn how we keep
            you safe.
          </p>
        </div>
        <div>
          <p>Learn More</p>
        </div>
      </div>
      <section className="hero-section">
        <div className="content">
          <h1 ref={titleRef}>A Faster Web Experience</h1>
          <p ref={subTitleRef}>Browse securely and seamlessly with Chrome.</p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
