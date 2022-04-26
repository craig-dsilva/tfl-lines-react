import React, { useState, useEffect } from "react";

import Modes from "./Components/Modes";
import Lines from "./Components/Lines";

import "./App.css";

const App = () => {
  const [transportModes, setTransportModes] = useState([]);
  const [lines, setLines] = useState([]);
  const [modeQuery, setModeQuery] = useState("");
  const [LineQuery, setLineQuery] = useState("");

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => setTransportModes(data))
      .catch((error) => console.log(error));
  }, []);

  const changeMode = (event) => {
    const value = event.target.value;
    if (value === "Choose a Mode of Transport...") {
      setModeQuery("");
    } else {
      setModeQuery(value);
      fetch(`https://api.tfl.gov.uk/Line/Mode/${value}`)
        .then((res) => res.json())
        .then((data) => setLines(data));
    }
  };

  const changeLine = (event) => {
    const value = event.target.value;
    setLineQuery(value);
  };

  return (
    <div className="App">
      <h1>Transport For London Line Information</h1>
      <Modes transportModes={transportModes} handleMode={changeMode} />
      {lines.length > 0 && <Lines lines={lines} handleMode={changeLine} />}
      <p>You selected: {LineQuery ? LineQuery : modeQuery}</p>
    </div>
  );
};

export default App;
