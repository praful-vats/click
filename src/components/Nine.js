import React, { useState, useEffect } from 'react';

const Nine = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,  background: 'black', }}>
      {/* Top left dot */}
      <div
        style={{
          position: 'absolute',
          margin: '10px',
          top: 0,
          left: 0,
          width: '50px',
          height: '50px',
          background: 'transparent',
          borderRadius: '50%',
        }}
      />
      {/* Top right dot */}
      {/* <div
        style={{
          position: 'absolute',
          margin: '10px',
          top: 0,
          right: 0,
          width: '50px',
          height: '50px',
          background: 'red',
          borderRadius: '50%',
        }}
      /> */}
      {/* Bottom left dot */}
      {/* <div
        style={{
          position: 'absolute',
          margin: '10px',
          bottom: 0,
          left: 0,
          width: '50px',
          height: '50px',
          background: 'red',
          borderRadius: '50%',
        }}
      /> */}
      {/* Bottom right dot */}
      <div
        style={{
          position: 'absolute',
          margin: '10px',
          bottom: 0,
          right: 0,
          width: '50px',
          height: '50px',
          background: 'transparent',
          borderRadius: '50%',
        }}
      />

      {/* Line connecting top left dot and cursor */}
      <div
        style={{
          position: 'absolute',
          margin: '0px',
          top: 0,
          left: 0,
          width: Math.sqrt(
            Math.pow(cursorPosition.x, 2) + Math.pow(cursorPosition.y, 2)
          ),
          height: '500px',
          background: 'red',
          transformOrigin: 'top left',
          transform: `rotate(${Math.atan2(
            cursorPosition.y,
            cursorPosition.x
          )}rad)`,
        }}
      />
      {/* Line connecting top right dot and cursor */}
      {/* <div
        style={{
          position: 'absolute',
          margin: '25px',
          top: 0,
          right: 0,
          width: Math.sqrt(
            Math.pow(window.innerWidth - cursorPosition.x, 2) +
              Math.pow(cursorPosition.y, 2)
          ),
          height: '2px',
          background: 'red',
          transformOrigin: 'top right',
          transform: `rotate(${Math.atan2(
            cursorPosition.y,
            window.innerWidth - cursorPosition.x
          )}rad)`,
        }}
      /> */}
      {/* Line connecting bottom left dot and cursor */}
      {/* <div
        style={{
          position: 'absolute',
          margin: '25px',
          bottom: 0,
          left: 0,
          width: Math.sqrt(
            Math.pow(cursorPosition.x, 2) +
              Math.pow(window.innerHeight - cursorPosition.y, 2)
          ),
          height: '2px',
          background: 'red',
          transformOrigin: 'bottom left',
          transform: `rotate(${Math.atan2(
            window.innerHeight - cursorPosition.y,
            cursorPosition.x
          )}rad)`,
        }}
      /> */}
      {/* Line connecting bottom right dot and cursor */}
      <div
        style={{
          position: 'absolute',
          margin: '0px',
          bottom: 0,
          right: 0,
          width: Math.sqrt(
            Math.pow(window.innerWidth - cursorPosition.x, 2) +
              Math.pow(window.innerHeight - cursorPosition.y, 2)
          ),
          height: '500px',
          background: 'blue',
          transformOrigin: 'bottom right',
          transform: `rotate(${Math.atan2(
            window.innerHeight - cursorPosition.y,
            window.innerWidth - cursorPosition.x
          )}rad)`,
        }}
      />

      {/* Displaying X and Y positions */}
      <div
        style={{
          position: 'absolute',
          top: cursorPosition.y + 'px',
          left: cursorPosition.x + 'px',
          fontSize: '150px',
          fontWeight: '900',
          color: 'white',
        }}
      >
         {cursorPosition.x},  {cursorPosition.y}
      </div>
    </div>
  );
};

export default Nine;
