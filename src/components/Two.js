import React, { useState } from 'react';
import './Two.css';

const Two = () => {
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

  const createGrid = () => {
    const grid = [];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const cellKey = `${row}-${col}`;
        const isHovered = hoveredCells.includes(cellKey);

        grid.push(
          <div
            key={cellKey}
            className={`cell ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => handleCellHover(cellKey)}
          />
        );
      }
    }

    return grid;
  };

  return <div className="grid-container">{createGrid()}</div>;
};

export default Two;
