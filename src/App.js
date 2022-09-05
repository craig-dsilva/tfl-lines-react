import React, { useState, useEffect } from "react";

import Modes from "./Components/Modes";
import Lines from "./Components/Lines";
import Termini from "./Components/Termini";

import "./App.css";

const App = () => {
  const [transportModes, setTransportModes] = useState([]);
  const [lines, setLines] = useState([]);
  const [termini, setTermini] = useState([]);

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => setTransportModes(data))
      .catch((error) => console.log(error));
  }, []);

  const changeMode = (event) => {
    const index = event.target.value;
    const mode = transportModes[index];
    fetch(`https://api.tfl.gov.uk/Line/Mode/${mode.modeName}`)
      .then((res) => res.json())
      .then((data) => setLines(data))
      .catch((error) => console.log(error));
  };

  const changeLine = (event) => {
    const index = event.target.value;
    const line = lines[index];
    fetch(`https://api.tfl.gov.uk/Line/${line.id}/Route`)
      .then((res) => res.json())
      .then((data) => setTermini(data.routeSections))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>Transport For London Line Information</h1>
      <Modes transportModes={transportModes} handleMode={changeMode} />
      {lines.length > 0 && <Lines lines={lines} handleMode={changeLine} />}
      <Termini termini={termini} />
    </div>
  );
};

export default App;
