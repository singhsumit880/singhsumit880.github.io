import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800); // Wait for fade out animation
    }, 2500); // 2.5s display time

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`davies-loader ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loader-mesh"></div>
      <h1 className="loader-title">
        SUMIT<span className="cursor-blink">_</span>
      </h1>
    </div>
  );
};

export default Loader;
