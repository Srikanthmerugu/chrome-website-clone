import React from "react";
import "../styles/footer.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MdArrowOutward } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-social">
          <p>Follow us</p>
          <div className="footer-icons">
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Chrome Family</h4>
          <a href="#">Other Platforms</a>
          <a href="#">
            Chromebooks{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">
            Chromecast{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
        </div>
        <div className="footer-column">
          <h4>Enterprise</h4>
          <a href="#">
            Download Chrome Browser{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">
            Chrome Browser for Enterprise{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">
            Chrome Devices{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">
            ChromeOS{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">
            Google Cloud{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">
            Google Workspace{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
        </div>
        <div className="footer-column">
          <h4>Education</h4>
          <a href="#">
            Google Chrome Browser{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">
            Devices{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">
            Web Store{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
        </div>
        <div className="footer-column">
          <h4>
            Dev and Partners
          </h4>
          <a href="#">
            Chromium{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">
            ChromeOS{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">
            Chrome Web Store{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">Chrome Experiments</a>
          <a href="#">Chrome Beta</a>
          <a href="#">Chrome Dev</a>
          <a href="#">Chrome Canary</a>
        </div>
        <div className="footer-column">
          <h4>Stay Connected </h4>
          <a href="#">
            Chrome Help{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">Google Chrome Blog</a>
          <a href="#">
            Update Chrome{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">Chrome Tips</a>
          <a href="#">
            Chrome Help{" "}
            <span className="footer-arrow">
              <MdArrowOutward />
            </span>
          </a>
          <a href="#">Google Chrome Blog</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <p>Google</p>
          <div className="footer-links-bottom">
            <a href="#">Privacy and Terms</a>
            <a href="#">About Google</a>
            <a href="#">Google Products</a>
          </div>
        </div>

        <div className="footer-links-bottom">
          <a href="#">
          <span className="footer-help">
          {/* <IoIosHelpCircle />  */}
          ?

            </span> Help
            
          </a>

          <select>
            <option> English United Kingdom</option>
            <option>English India</option>
            <option>English United States</option>
            <option>English Canada</option>
            <option>English Pakistan</option>
            <option>English Jamaica</option>
            <option>English Singapore</option>
            <option>English Sri Lanka</option>
            <option>English Jamaica</option>
            <option>English Malaysia</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
