import React, { useEffect } from 'react';
import '../styles/preloader.scss';

const Preloader = ({ setLoading }) => {
  useEffect(() => {
 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="preloader">
      <div className="preloader-content">
        <h1>Frontend Developer Task</h1>
        <p>Company: Huemn Interactive Pvt Ltd</p>
        <p>Position: Frontend Developer (React)</p>
        <p>I have completed the assigned task for the Frontend Developer (React) position at Huemn Interactive Pvt Ltd. As requested, I have cloned the animated segments of the Chrome page using React, SCSS, and GSAP to achieve smooth and engaging animations.</p>

        <h3>wait 3s secounds for Output</h3>
      
      </div>
    </div>
  );
};

export default Preloader;
