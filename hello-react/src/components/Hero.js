import React, { Component } from "react";
import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png"
import Btn from "./Btn"

class Hero extends Component {
  render() {
    return (
      <section className="hero-card">
        <div className="hero-nav-wrapper">
          <div className="hero-nav">
            <img src={logo} alt="ironhack-logo" />
            <a href=""><img src={menu} alt="" /></a>
          </div>
          <div className="hero-content-wrapper">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn ho to use the most popular frontend library,
            and become a super Ninja developer.</p>
            <Btn/>            
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;