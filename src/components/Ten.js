import React, { useEffect, useRef } from 'react';
import './Ten.css';

const Ten = ({ onDotClick }) => {
  const dotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const dotElement = dotRef.current;

      if (dotElement && dotElement.contains(event.target)) {
        onDotClick();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [onDotClick]);

  return (
    <div className="ten-container">
      <div ref={dotRef} className="red-dot"></div>
    </div>
  );
};

export default Ten;
