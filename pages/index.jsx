import React, { useState } from 'react';

const MagicNumberCard = ({ value }) => {
  return (
    <div className="card">
      <h2>{value}</h2>
    </div>
  );
};

const MagicNumberComponent = () => {
  const [cards] = useState([10, 10, 10]);
  //lacks "set"

  return (
    <div>
      <h1>Magic Number: 30</h1>
      <div className="card-container">
        {cards.map((cardValue, index) => (
          <MagicNumberCard key={index} value={cardValue} /> //what des"key" d
        ))}
      </div>
    </div>
  );
};

export default MagicNumberComponent;
