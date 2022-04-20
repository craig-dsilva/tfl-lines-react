import React from "react";

const Modes = ({ transportModes, handleMode }) => {
  return (
    <select onChange={handleMode}>
      <option>Choose a Mode of Transport...</option>
      {transportModes.map((mode, index) => {
        return <option key={index}>{mode.modeName}</option>;
      })}
    </select>
  );
};

export default Modes;
