import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/hero-section.scss";
import { FaDownload } from "react-icons/fa";
import Header from "./Header";
import Navbar from "./Navbar";

const HeroSection = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
    gsap.fromTo(
      subTitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 1 }
    );
  }, []);

  return (
    <div className="hero-section-main-container">
      {/* <Header/> */}
      <div className="hero-topbar">
        <div className="hero-sub-container">
          <img
            src="https://www.google.com/chrome/static/images/v2/promo-banner/2024-08-cam/security.webp"
            alt="Security"
          />
          <p>
            Chrome blocks 3 million cyberattacks every day. Learn how we keep
            you safe.
          </p>
        </div>
        <div className="learn-more">
          <p>Learn more ＞</p>
        </div>
      </div>
      <div ref={titleRef} className="hero-section">
        <div className="hero-content">
          <img
            src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
            alt="Chrome Logo"
            className="chrome-logo"
          />
          <h1>
            The browser <br /> built to be yours
          </h1>
          <button ref={buttonRef} className="download-btn">
            <FaDownload /> Download Chrome
          </button>
          <p ref={subTitleRef} className="update-link">
            I want to update Chrome
          </p>
          <p className="os-info">For Windows 11/10 64-bit</p>
          <div className="checkbox-section">
            <input type="checkbox" id="usage-data" />
            <label htmlFor="usage-data">
              Help make Google Chrome better by automatically sending usage
              statistics and crash reports to Google.{" "}
              <a href="https://www.google.com">Learn more</a>
            </label>
          </div>
          <div className="terms-section">
            By downloading Chrome, you agree to the{" "}
            <a href="https://www.google.com">Google Terms of Service</a> and
            <br />{" "}
            <a href="https://www.google.com">
              Chrome and ChromeOS Additional Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
