import React from 'react';
import Logo from './Logo';
import MenuTop from './MenuTop';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="top-bar">
        <Logo />
        <MenuTop />
      </div>
      <div className="landing-content">
        <h1>Say Hello to React JS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button className="awesome-button">Awesome!</button>
      </div>
    </div>
  );
};

export default LandingPage;













