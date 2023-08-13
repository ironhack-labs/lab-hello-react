import React from 'react';
import icon2Image from '../images/icon2.png';
import './Icon.css'; // Import styles if needed

const Icon2 = () => {
  return (
    <div className="icon-container">
      <img src={icon2Image} alt="Icon 2" />
      <h2>Components</h2>
      <p>Build encapsulated components that manage their state.</p>
    </div>
  );
};

export default Icon2;