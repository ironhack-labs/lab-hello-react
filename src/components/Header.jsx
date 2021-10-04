import React from "react";

const Header = () => {
  return (
    <div className="react-bg">
      <div className="header">
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="" />
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="" />
      </div>
      <div className="banner">
        <h1>
          Say hello to
          <br /> ReactJS
        </h1>
        <p>
          <span>You will learn how to use</span> <span>the most popular frontend library,</span> <span>and become a super ninja developer.</span>
        </p>
        <button type="button" className="btn-lab">
          Awesome!
        </button>
      </div>
    </div>
  );
};

export default Header;
