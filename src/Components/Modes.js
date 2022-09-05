import React from "react";
import titleCase from "../helpers/titleCase";

const Modes = ({ transportModes, handleMode }) => {
  return (
    <select onChange={handleMode}>
      <option>Choose a Mode of Transport...</option>
      {transportModes.map((mode, index) => {
        return (
          <option key={index} value={index}>
            {titleCase(mode.modeName)}
          </option>
        );
      })}
    </select>
  );
};

export default Modes;
