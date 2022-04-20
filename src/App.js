import React, { useState, useEffect } from "react";

import Modes from "./Components/Modes";

import "./App.css";

const titleCase = (string) => {
  const splittedString = string.split("-");
  const titleCased = splittedString.map(
    (word) => word[0].toUpperCase() + word.slice(1, word.length) + " "
  );
  return titleCased.join("");
};

const App = () => {
  const [transportModes, setTransportModes] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState("");

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => setTransportModes(data))
      .catch((error) => console.log(error));
  }, []);

  const changeMode = (event) => {
    const value = event.target.value;
    if (value === "Choose a Mode of Transport...") {
      setSelectedQuery("");
    } else {
      setSelectedQuery(titleCase(value));
    }
  };

  return (
    <div className="App">
      <h1>Transport For London Line Information</h1>
      <Modes transportModes={transportModes} handleMode={changeMode} />
      <p>Your selected mode: {selectedQuery}</p>
    </div>
  );
};

export default App;
