import React, { useEffect, useRef } from "react";
import "../styles/browserBuilt.scss";
import { RxCountdownTimer } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";

const BrowserBuilt = () => {
  

  return (
    <>
      <div className="update-container" >
        <h1 className="update-build">The browser 
          <span className="update-content">
            <span >
              <RxCountdownTimer />
            </span>
            <span>built</span>
          </span><br />
          by Google</h1>

          <div className="built-container">
            <div className="built-sub-container">
            <div className="built-content-1">
                <p>GOOGLE AI</p>
                <h1>Access AI superpowers while you browse.</h1>
            </div>
            <div className="built-content-2"> 
                <p>Google is integrating artificial intelligence to make our products more useful. We use AI for features like Search, Google Translate, and more, and we’re innovating new technologies responsibly.</p>

                <a href="" >Explore Google AI  <span className="built-arrow">
              <MdArrowOutward />
            </span></a>
            </div>
           
            </div>
            <img src="https://www.google.com/chrome/static/images/v2/gallery/ai_desktop.webp" alt="google-crome"/>
          </div>

        <div className="update-card-container">
          <div className="update-card-1">
            <div className="update-card-content">
              <p className="title">Updates</p>
              <h1>Automatic updates</h1>
              <p>
                There’s a new Chrome release every four weeks, making it easy to
                have the newest features and a faster, safer web browser.
              </p>
              <a href="#">Learn about automatic updates</a>
            </div>
            <img
              src="https://www.google.com/chrome/static/images/engagement-homepage/updates/updates.png"
              alt="Chrome Updates"
            />
          </div>
          <div className="update-card-2">
            <div className="update-card-content">
              <p className="title">Updates</p>
              <h1>New from Chrome</h1>
              <p>
                There’s a new Chrome release every four weeks, making it easy to
                have the newest features and a faster, safer web browser.
              </p>
              <a href="#">
                Learn about automatic updates <MdArrowOutward />
              </a>
            </div>
            <img
              src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
              alt="Chrome Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowserBuilt;
