import React, { useEffect, useRef } from 'react';

const Seven = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const d = 5;
    const middle = width / 2;
    const horizontalLines = [];
    const verticalLines = [];
  
    canvas.width = width;
    canvas.height = height;
    context.fillStyle = 'transparent';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'black';
    context.lineWidth = 2;
  
    for (let i = d; i <= width; i += d) {
      const b = i < middle;
  
      if (b === true) {
        // Vertical line
        verticalLines.push(i);
        context.beginPath();
        context.moveTo(i, d);
        context.lineTo(i, height - d);
        context.stroke();
      } else {
        // Horizontal line
        horizontalLines.push(i);
        context.beginPath();
        context.moveTo(middle, i - middle + d);
        context.lineTo(width - d, i - middle + d);
        context.stroke();
      }
    }
    const lerpColor = (color1, color2, amount) => {
      const result = color1.slice();
      for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + amount * (color2[i] - color1[i]));
      }
      return result;
    };
    
  
    // Set globalCompositeOperation to "lighter" for brighter lines
    context.globalCompositeOperation = 'lighter';
  
    const handleHorizontalHover = (event) => {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseY = event.clientY - rect.top;
  
      const lineIndex = Math.floor(mouseY / d);
      if (lineIndex >= 0 && lineIndex < horizontalLines.length) {
        const colorProgress = (event.clientX - middle) / (width - middle);
        const hue = Math.floor(240 * colorProgress);
        const color1 = [hue, 100, 50]; // Starting color
        const color2 = [hue + 1, 100, 50]; // Ending color
        const amount = colorProgress % (1 / d); // Interpolation amount
        const interpolatedColor = lerpColor(color1, color2, amount);
        const color = `hsl(${interpolatedColor[0]}, ${interpolatedColor[1]}%, ${interpolatedColor[2]}%)`;
        canvas.style.backgroundColor = color;
      } else {
        canvas.style.backgroundColor = 'black';
      }
    };
  
    const handleVerticalHover = (event) => {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const lineIndexX = Math.floor(mouseX / d);
      const lineIndexY = Math.floor(mouseY / d);

      if (lineIndexX >= 0 && lineIndexY < verticalLines.length) {
        const currentBrightness = (height - event.clientY) / height;
        canvas.style.filter = `brightness(${currentBrightness})`;
      }
    };
  
    canvas.addEventListener('mousemove', handleHorizontalHover);
    canvas.addEventListener('mousemove', handleVerticalHover);
  
    // Clean up event listeners when component unmounts
    return () => {
      canvas.removeEventListener('mousemove', handleHorizontalHover);
      canvas.removeEventListener('mousemove', handleVerticalHover);
    };
  }, []);
  

  return <canvas ref={canvasRef} />;
};

export default Seven;
