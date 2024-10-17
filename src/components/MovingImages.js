import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/movingImages.scss';

gsap.registerPlugin(ScrollTrigger); 

const MovingImages = () => {
  const imageRowRef = useRef(null); 

  const images = [
    { src: 'https://www.google.com/chrome/static/images/intl/en_GB/dev-components/chrome-gallery-1.webp', type: 'landscape' },
    { src: 'https://www.google.com/chrome/static/images/intl/en_GB/dev-components/chrome-gallery-2.webp', type: 'vertical' },
    { src: 'https://www.google.com/chrome/static/images/intl/en_GB/dev-components/chrome-gallery-3.webp', type: 'landscape' },
    { src: 'https://www.google.com/chrome/static/images/intl/en_GB/dev-components/chrome-gallery-4.webp', type: 'vertical' },
    { src: 'https://www.google.com/chrome/static/images/intl/en_GB/dev-components/chrome-gallery-5.webp', type: 'landscape' },
  ];

  useEffect(() => {
    
    gsap.to(imageRowRef.current, {
      x: '-50%',
      ease: 'linear',
      scrollTrigger: {
        trigger: imageRowRef.current,
        start: 'top bottom',
        end: 'bottom top',   
        scrub: true,  
      },
    });
  }, []);

  return (
    <div className="moving-images-container">
      <div className="image-row" ref={imageRowRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            className={image.type}
          />
        ))}
      </div>
    </div>
  );
};

export default MovingImages;
