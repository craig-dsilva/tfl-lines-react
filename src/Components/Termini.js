import React from "react";

const Termini = ({ termini }) => {
  return (
    <div className="termini">
      {termini.map((terminus, index) => {
        return <p key={index}>{terminus.name}</p>;
      })}
    </div>
  );
};

export default Termini;
