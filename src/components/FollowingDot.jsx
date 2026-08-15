import React, { useEffect, useRef } from 'react';
import './FollowingDot.css';

const FollowingDot = () => {
  const dotRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot || !window.matchMedia('(pointer: fine)').matches) return undefined;

    const moveDot = () => {
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.18;
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.18;

      dot.style.transform = `translate3d(${positionRef.current.x - 6}px, ${positionRef.current.y - 6}px, 0)`;
      frameRef.current = window.requestAnimationFrame(moveDot);
    };

    const handleMouseMove = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      dot.classList.add('is-visible');
    };

    window.addEventListener('mousemove', handleMouseMove);
    frameRef.current = window.requestAnimationFrame(moveDot);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return <div ref={dotRef} className="following-dot" aria-hidden="true" />;
};

export default FollowingDot;
