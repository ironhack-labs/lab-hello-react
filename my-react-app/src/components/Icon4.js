import React from 'react';
import icon4Image from '../images/icon4.png';
import './Icon.css'; // Import styles if needed

const Icon4 = () => {
  return (
    <div className="icon-container">
      <img src={icon4Image} alt="Icon 4" />
      <h2>JSX</h2>
      <p>Satically-typed, designed to run on modern browsers.</p>
    </div>
  );
};

export default Icon4;