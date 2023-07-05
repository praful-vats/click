import React, { useRef, useEffect } from 'react';
import './Five.css';

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
      const goldenRotation = 137.5; // Golden ratio rotation value

      tip.style.transform = `translate(-50%, -50%) rotate(${goldenRotation - degrees}deg)`;
      tip.style.color = `hsl(${(degrees % 180)}, 100%, 50%)`; 
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="one-arrowv">
      <div className="one-tipv" ref={tipRef}>
        {/* &#x2941; */}|
      </div>
    </div>
  );
};

const Five = () => {
  return (
    <div className="grid-containerv">
      {Array.from({ length: 160 }).map((_, index) => (
        <div key={index} className="grid-itemv">
          <Arrow />
        </div>
      ))}
    </div>
  );
};

export default Five;