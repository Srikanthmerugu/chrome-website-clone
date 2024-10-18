import React, { useEffect, useRef } from "react";
import "../styles/browserBuilt.scss";
import { RxCountdownTimer } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const BrowserBuilt = () => {
  return (
    <>
      <div id="built" className="update-container">
        <h1 className="update-build">
          The browser
          <span className="update-content">
            <span>
              <RxCountdownTimer />
            </span>
            <span>built</span>
          </span>
          <br />
          by Google
        </h1>

        <div className="built-container">
          <div className="built-sub-container">
            <div className="built-content-1">
              <p>GOOGLE AI</p>
              <h1>Access AI superpowers while you browse.</h1>
            </div>
            <div className="built-content-2">
              <p>
                Google is integrating artificial intelligence to make our
                products more useful. We use AI for features like Search, Google
                Translate, and more, and we’re innovating new technologies
                responsibly.
              </p>

              <a href="">
                Explore Google AI{" "}
                <span className="built-arrow">
                  <MdArrowOutward />
                </span>
              </a>
            </div>
          </div>
          <img
            src="https://www.google.com/chrome/static/images/v2/gallery/ai_desktop.webp"
            alt="google-crome"
          />
        </div>
      </div>

      <div id="built-two" className="update-card-container">
        <div className="update-card-1">
          <div className="update-card-content">
            <p className="title">Google Search</p>
            <h1>The search bar you love, built right in.</h1>
          </div>
          <div className="card-images">
            <img
              src="https://www.google.com/chrome/static/images/v2/gallery/passwords-fill-1.webp"
              alt="Chrome Updates"
            />
            <img
              className="card-img-2"
              src="https://www.google.com/chrome/static/images/v2/gallery/search-front_desktop.webp"
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
            <p className="title">GOOGLE WORKSPACE</p>
            <h1>Get things done, with or without Wi-Fi.</h1>
          </div>
          <div className="card-images">
            <img
              src="https://www.google.com/chrome/static/images/v2/gallery/workspace-1-2x.webp"
            />
            <img
              className="card-img-2"
              src="https://www.google.com/chrome/static/images/v2/gallery/workspace-2-2x.webp"
              alt="Chrome Updates"
            />
            </div>
            <p className="safe-card-icon">
              {" "}
              <FaPlus />
            </p>
          </div>
       
      </div>
    </>
  );
};

export default BrowserBuilt;
