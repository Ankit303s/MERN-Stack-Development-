import React from 'react';
import './ColoredGrid.css'; // Create a CSS file for styles

const ColoredGrid = () => {
  const numbers = Array.from({ length: 32 }, (_, i) => i); // Create an array from 0 to 31

  const getColorClass = (num) => {
    if (num % 8 === 0 || (num - 1) % 8 === 0 || (num - 15) % 16 === 0) return 'yellow';
    if (num % 4 === 2 || num % 4 === 3) return 'red';
    return 'green';
  };

  return (
    <div className="grid-container">
      {numbers.map((num) => (
        <div key={num} className={`grid-item ${getColorClass(num)}`}>
          {num}
        </div>
      ))}
    </div>
  );
};

export default ColoredGrid;
