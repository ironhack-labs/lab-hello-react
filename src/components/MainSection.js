import React from 'react';
import Components from '/images/image3.png';
import Singleway from '/images/image4.png';
import JSX from '/images/image5.png';

function MainSection() {
  return (
    <section className="main-section">
      <div className="main-section__container">
        <div className="main-section__row">
          <div className="main-section__column">
          <img className="main-section__image" src={images/image3.png} alt="image3" />
            <h2 className="main-section__title">Components</h2>
            <p className="main-section__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="main-section__column">
            <img className="main-section__image" src={images/image4.png} alt="image4" />
            <h2 className="main-section__title">Single-Way</h2>
            <p className="main-section__text">Pellentesque sit amet libero nec lacus tempor bibendum.</p>
          </div>
          <div className="main-section__column">
            <img className="main-section__image" src={images/image5.png} alt="image5" />
            <h2 className="main-section__title">JSX</h2>
            <p className="main-section__text">Suspendisse vehicula massa eget erat pulvinar eleifend.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;