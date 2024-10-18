import React, { useEffect, useRef } from "react";
import "../styles/staysafe.scss";
import { RxCountdownTimer } from "react-icons/rx";
import { gsap } from "gsap";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const StaySafe = () => {
  const iconRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(iconRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div id="safe" className="staySafe-container">
      <h1 className="staySafe-heading">
        Stay
        <span className="update-content">
          {/* <span ref={iconRef}> */}
          <span>
            <AiOutlineSafetyCertificate />
          </span>
          <span
          // ref={textRef}
          >
            Safe
          </span>
        </span>
        <br />
        while you browse
      </h1>

      <div>
        <div className="update-card-container">
          <div className="update-card-1">
            <div className="update-card-content">
              <p className="title">PASSWORD MANAGER</p>
              <h1>Use strong passwords on every site.</h1>
            </div>
            <div className="card-images">
              <img
                src="https://www.google.com/chrome/static/images/v2/gallery/passwords-fill-1.webp"
                alt="Chrome Updates"
              />
              <img
                className="card-img-2"
                src="https://www.google.com/chrome/static/images/intl/en_GB/v2/gallery/passwords-fill-2.webp"
                alt="Chrome Updates"
              />

              <p className="safe-card-icon">
                {" "}
                <FaPlus />
              </p>
            </div>
          </div>

          <div className="update-card-2">
            <div className="update-card-content">
              <p className="title">SAFETY CHECK</p>
              <h1>Check your safety level in real time with just one click.</h1>
            </div>
            <div className="card-images">
              <p className="safe-card-icon">
                {" "}
                <FaPlus />
              </p>
            </div>
          </div>
        </div>

        <div className="update-card-container">
          <div className="update-card-2">
            <div className="update-card-content">
              <p className="title">ENHANCED SAFE BROWSING</p>
              <h1>
                {" "}
                Browse with the confidence that you're staying safer online.
              </h1>
            </div>
            <div className="card-images">
              <p className="safe-card-icon">
                {" "}
                <FaPlus />
              </p>
            </div>
          </div>

          <div className="update-card-1">
            <div className="update-card-content">
              <p className="title">PRIVACY GUIDE</p>
              <h1>
                Keep your privacy under your control with easy-to-use settings.
              </h1>
            </div>
            <div className="card-images">
              <img
                src="https://www.google.com/chrome/static/images/v2/gallery/google-safety.webp"
                alt="Chrome Updates"
              />
              <img
                className="card-img-2"
                src="https://www.google.com/chrome/static/images/v2/gallery/google-safety.webp"
                alt="Chrome Updates"
              />

              <p className="safe-card-icon">
                {" "}
                <FaPlus />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaySafe;
