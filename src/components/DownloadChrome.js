import React, { useState } from "react";
import "../styles/downloadChrome.scss";
import { FaDownload } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";


const DownloadChrome = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleQrCode = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chrome-container">
      <div className="content">
        <h1>Take your browser<br/> with you</h1>
        <p>
          Download Chrome on your mobile device or tablet and sign into your<br/>
          account for the same browser experience, everywhere.
        </p>
        <button className="download-button">
          <span className="download-icon"> <FaDownload /></span> Download Chrome
        </button>
      </div>

      <div className={`qr-container ${isOpen ? "open" : "closed"}`}>
        
        {isOpen && (
          <>
            <img src="https://www.google.com/chrome/static/images/go-mobile-qrs/qr-take-it-with-you.webp" alt="QR Code" className="qr-code" />
            <p>Scan for the Chrome app</p>
          </>

        )}
        <div className="toggle-btn" onClick={toggleQrCode}>
        <FaMobileAlt />
        {isOpen ? "➔ " : "⬅"}
        </div>
      </div>
    </div>
  );
};

export default DownloadChrome;
