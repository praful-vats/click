import React, { useState } from 'react';
import './Four.css';

const Four = () => {
  const numRows = 20;
  const numCols = 10;
  const [hoveredCells, setHoveredCells] = useState([]);

  const handleCellHover = (cellKey) => {
    if (!hoveredCells.includes(cellKey)) {
      const randomColor = getRandomColor();
      const updatedHoveredCells = [...hoveredCells, { cellKey, color: randomColor }];
      setHoveredCells(updatedHoveredCells);
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
        const hoveredCell = hoveredCells.find((cell) => cell.cellKey === cellKey);
        const isHovered = hoveredCell !== undefined;

        grid.push(
          <div
            key={cellKey}
            className={`cellf ${isHovered ? 'hoveredf' : ''}`}
            style={isHovered ? { backgroundColor: hoveredCell.color } : null}
            onMouseEnter={() => handleCellHover(cellKey)}
          />
        );
      }
    }

    return grid;
  };

  return <div className="grid-containerf">{createGrid()}</div>;
};

export default Four;
