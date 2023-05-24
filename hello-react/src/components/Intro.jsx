import ironhackLogo from "../images/Ironhack_logo.png";
import menu from "../images/Menu_hamburger.png";
import React from "react";
import "../styles/intro.css";

const heading = <h1 className="textLeft">Say Hello to ReactJS</h1>;
const intro = <p className="textLeft">You will learn how to use the most popular frontend library, and become a super Ninja developer</p>;

function Intro() {
  return (
    <div className="introContainer">
      <div className="topHeader">
        <img src={ironhackLogo} alt="Ironhack_logo" />
        <img src={menu} alt="hamburger_menu" />
      </div>
      <div className="textIntro">
        <div>{heading}</div>
        <div>{intro}</div>
      </div>
    </div>
  );
}

export default Intro;
