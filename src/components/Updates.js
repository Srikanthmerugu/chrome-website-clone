import React, { useEffect, useRef } from "react";
import "../styles/update.scss";
import { RxCountdownTimer } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";
import { gsap } from "gsap";

const Updates = () => {
  const updateRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(iconRef.current, {
            duration: 1,
            rotation: 360,
            ease: "power2.out",
          });
          gsap.fromTo(
            textRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "bounce.out", delay: 0.2 }
          );
          gsap.to(imageRef.current, {
            duration: 2,
            rotation: 360,
            x: "100%",
            ease: "power2.out",
          });
        }
      },
      { threshold: 0.5 }
    );

    if (updateRef.current) {
      observer.observe(updateRef.current);
    }

    return () => {
      if (updateRef.current) {
        observer.unobserve(updateRef.current);
      }
    };
  }, []);

  return (
    <>
      <div id="update" className="update-container" ref={updateRef}>
        <h1>
          Discover the latest <br />
          <span className="update-content">
            <span ref={iconRef}>
              <RxCountdownTimer />
            </span>
            <span ref={textRef}>updates</span>
          </span>
          from Chrome
        </h1>

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
              ref={imageRef}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Updates;
