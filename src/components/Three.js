import React, { useState } from 'react';
import './Three.css';

const Three = () => {
  const numRows = 19;
  const numCols = 9;
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
            className={`celle ${isHovered ? 'hoverede' : ''}`}
            onMouseEnter={() => handleCellHover(cellKey)}
          />
        );
      }
    }

    return grid;
  };

  return <div className="grid-containere">{createGrid()}</div>;
};

export default Three;
