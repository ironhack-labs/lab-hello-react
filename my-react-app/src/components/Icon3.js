import React from 'react';
import icon3Image from '../images/icon3.png';
import './Icon.css'; // Import styles if needed

const Icon3 = () => {
  return (
    <div className="icon-container">
      <img src={icon3Image} alt="Icon 3" />
      <h2>Single-Way</h2>
      <p>A set of immutable values are passed to the component's.</p>
    </div>
  );
};

export default Icon3;