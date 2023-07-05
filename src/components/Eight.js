import React, { useState } from 'react';
import './Eight.css';

const Eight = () => {
  const numRows = 20;
  const numCols = 10;
  const [hoveredCells, setHoveredCells] = useState([]);

  const handleCellHover = (cellKey) => {
    if (!hoveredCells.includes(cellKey)) {
      setHoveredCells([...hoveredCells, cellKey]);
    } else {
      setHoveredCells(hoveredCells.filter((key) => key !== cellKey));
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const createGrid = () => {
    const grid = [];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const cellKey = `${row}-${col}`;
        const isHovered = hoveredCells.includes(cellKey);
        const backgroundColor = isHovered ? getRandomColor() : 'black';

        grid.push(
          <div
            key={cellKey}
            className="cellt"
            style={{ backgroundColor }}
            onMouseEnter={() => handleCellHover(cellKey)}
          />
        );
      }
    }

    return grid;
  };

  return <div className="grid-containert">{createGrid()}</div>;
};

export default Eight;
