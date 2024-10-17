import React from 'react';
import '../styles/movingImages.scss'; // Import SCSS

const MovingImages = () => {
  const images = [
    { src: 'https://www.google.com/chrome/static/images/intl/en_GB/dev-components/chrome-gallery-1.webp', type: 'landscape' },
    { src: 'https://www.google.com/chrome/static/images/intl/en_GB/dev-components/chrome-gallery-2.webp', type: 'vertical' },
    { src: 'https://www.google.com/chrome/static/images/intl/en_GB/dev-components/chrome-gallery-3.webp', type: 'landscape' },
    { src: 'https://www.google.com/chrome/static/images/intl/en_GB/dev-components/chrome-gallery-4.webp', type: 'vertical' },
    { src: 'https://www.google.com/chrome/static/images/intl/en_GB/dev-components/chrome-gallery-5.webp', type: 'landscape' },
  ];

  return (
    <div className="moving-images-container">
      <div className="image-row">
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
