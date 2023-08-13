import React from 'react';
import icon1Image from '../images/icon1.png';
import './Icon.css'; // Import styles if needed

const Icon1 = () => {
  return (
    <div className="icon-container">
      <img src={icon1Image} alt="Icon 1" />
      <h2>Declarative</h2>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
  );
};

export default Icon1;






