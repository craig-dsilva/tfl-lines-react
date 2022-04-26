import React from "react";

const Lines = ({ lines, handleMode }) => {
  lines.sort((a, b) => a.name - b.name);

  return (
    <select onChange={handleMode}>
      <option>Choose a Line...</option>
      {lines.map((line, index) => {
        return <option key={index}>{line.name}</option>;
      })}
    </select>
  );
};

export default Lines;
