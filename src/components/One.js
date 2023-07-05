import React, { useRef, useEffect } from 'react';
import './One.css';

const Arrow = () => {
  const tipRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const tip = tipRef.current;
      const boundingRect = tip.getBoundingClientRect();
      const centerX = boundingRect.left + boundingRect.width / 2;
      const centerY = boundingRect.top + boundingRect.height / 2;
      const radians = Math.atan2(event.clientX - centerX, event.clientY - centerY);
      const degrees = (radians * 180) / Math.PI;
      tip.style.transform = `translate(-50%, -50%) rotate(${180 - degrees}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="one-arrowo">
      <div className="one-tipo" ref={tipRef}>
        &#x1F861;
      </div>
    </div>
  );
};

const One = () => {
  return (
    <div className="grid-containero">
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="grid-itemo">
          <Arrow />
        </div>
      ))}
    </div>
  );
};

export default One;
