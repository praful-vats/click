import React, { useState } from 'react';
import './App.css';

const App = () => {
  const numRows = 20;
  const numCols = 20;
  const [gridShape, setGridShape] = useState('square');

  const renderGrid = () => {
    const grid = [];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        grid.push(
          <span
            key={`${row}-${col}`}
            className={`cell ${gridShape}`}
            style={{ gridColumn: col + 1, gridRow: row + 1 }}
            onClick={() => toggleGridShape()}
          ></span>
        );
      }
    }

    return grid;
  };

  const toggleGridShape = () => {
    let nextShape = '';
    switch (gridShape) {
      case 'square':
        nextShape = 'circle';
        break;
      case 'circle':
        nextShape = 'pentagon';
        break;
      case 'pentagon':
        nextShape = 'new';
        break;
      case 'new':
        nextShape = 'square';
        break;
      default:
        nextShape = 'square';
    }
    setGridShape(nextShape);
  };
  

  return <div className="grid">{renderGrid()}</div>;
};

export default App;






import React from 'react';
import './Three.css';

const Three = () => {
  const gridSize = 50;

  const createGrid = () => {
    const grid = [];

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const isCenterDot = row === Math.floor(gridSize / 4) && col === Math.floor(gridSize / 2);

        grid.push(
          <div
            key={`${row}-${col}`}
            className={`dot ${isCenterDot ? 'red-dot' : ''}`}
          >
            •
          </div>
        );
      }
    }

    return grid;
  };

  return <div className="grid-containere">{createGrid()}</div>;
};

export default Three;


.grid-containere {
  display: grid;
  grid-template-columns: repeat(50, 1fr);
  grid-template-rows: repeat(30, 1fr);
  grid-gap: 4px; 
  width: 100vw; 
  height: 100vh; 
  justify-items: center;
  align-items: center;
  background-color: black;
}

.dot {
  font-size: 16px; 
  color: white;
}

.red-dot {
  color: red;
}


import React, { useState } from 'react';
import './Three.css';

const Three = () => {
  const numRows = 20;
  const numCols = 10;
  const [hoveredCell, setHoveredCell] = useState(null);

  const createGrid = () => {
    const grid = [];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const cellKey = `${row}-${col}`;

        grid.push(
          <div
            key={cellKey}
            className={`cell ${hoveredCell === cellKey ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCell(cellKey)}
            onMouseLeave={() => setHoveredCell(null)}
          />
        );
      }
    }

    return grid;
  };

  return <div className="grid-container">{createGrid()}</div>;
};

export default Three;


.grid-container {
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 1px;
  height: 100vh;
  width: 100vw;
  background-color: #eee;
}

.cell {
  background-color: black;
  transition: transform 1s ease;
}

.hovered {
  transform: scale(0.5);
  border-radius: 50%;
}
//color+golden+follow
import React, { useRef, useEffect } from 'react';
import './Two.css';

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
    <div className="one-arrowt">
      <div className="one-tipt" ref={tipRef}>
        {/* &#x2941; */}|
      </div>
    </div>
  );
};

const Two = () => {
  return (
    <div className="grid-containert">
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="grid-itemt">
          <Arrow />
        </div>
      ))}
    </div>
  );
};

export default Two;
.grid-containert {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  height: 100vh;
  background-color: black;
}

.grid-itemt {
  width: 100px;
  height: 100px;
  color: white;
}

.one-arrowt {
  position: relative;
  width: 100%;
  height: 100%;
}

.one-tipt {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 100px;
  transform: translate(-50%, -50%);
}


//keyb
import React, { useState, useEffect } from 'react';
import './Eight.css';

const Eight = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      const { x, y } = dotPosition;

      switch (key) {
        case 'ArrowUp':
          setDotPosition({ x, y: y - 1 });
          break;
        case 'ArrowDown':
          setDotPosition({ x, y: y + 1 });
          break;
        case 'ArrowLeft':
          setDotPosition({ x: x - 1, y });
          break;
        case 'ArrowRight':
          setDotPosition({ x: x + 1, y });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dotPosition]);

  const renderGrid = () => {
    const grid = [];

    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 19; x++) {
        const cellClassName = `grid-cell ${x === dotPosition.x && y === dotPosition.y ? 'dot' : ''}`;

        grid.push(
          <div
            key={`${x}-${y}`}
            className={cellClassName}
            style={{
              gridColumn: x + 1,
              gridRow: y + 1,
            }}
          />
        );
      }
    }

    return grid;
  };

  return <div className="grid">{renderGrid()}</div>;
};

export default Eight;
.grid {
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  grid-template-rows: repeat(9, 1fr);
  gap: 2px;
  background-color: #f1f1f1;
  height: 100vh;
}

.grid-cell {
  background-color: rgb(0, 0, 0);
}

.dot {
  background-color: red;
}

//key cross
import React, { useState, useEffect } from 'react';
import './Eight.css';

const Eight = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      const { x, y } = dotPosition;

      switch (key) {
        case 'ArrowUp':
          setDotPosition({ x, y: y - 1 });
          break;
        case 'ArrowDown':
          setDotPosition({ x, y: y + 1 });
          break;
        case 'ArrowLeft':
          setDotPosition({ x: x - 1, y });
          break;
        case 'ArrowRight':
          setDotPosition({ x: x + 1, y });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dotPosition]);

  const renderGrid = () => {
    const grid = [];

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 20; x++) {
        const lineClassName = `grid-line ${x === dotPosition.x || y === dotPosition.y ? 'active' : ''}`;

        grid.push(
          <div
            key={`${x}-${y}`}
            className={lineClassName}
            style={{
              gridColumn: x + 1,
              gridRow: y + 1,
            }}
          />
        );
      }
    }

    return grid;
  };

  return <div className="grid">{renderGrid()}</div>;
};

export default Eight;
.grid {
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 0;
  background-color: #f1f1f1;
  height: 100vh;
}

.grid-line {
  border: 1px solid #000;
}

.active {
  background-color: red;
}
