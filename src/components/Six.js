import React, { useRef, useEffect } from 'react';

function Six() {
  const canvasRef = useRef(null);
  let maxDistance;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function setup() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      maxDistance = Math.sqrt(canvas.width ** 2 + canvas.height ** 2);
    }

    function draw(mouseX, mouseY) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000000';

      for (let i = 0; i <= canvas.width; i += 20) {
        for (let j = 0; j <= canvas.height; j += 20) {
          let size = Math.sqrt((mouseX - i) ** 2 + (mouseY - j) ** 2);
          size = (size / maxDistance) * 30;

          // Add randomness to the size
          size += Math.random() * 20;

          size = Math.abs(size); // Ensure size is always positive

          ctx.beginPath();
          ctx.arc(i, j, size / 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }
      }
    }

    function handleMouseMove(event) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      draw(mouseX, mouseY);
    }

    setup();
    canvas.addEventListener('mousemove', handleMouseMove);
    draw(0, 0); // Initial draw

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', background: 'red' }} />;
}

export default Six;
