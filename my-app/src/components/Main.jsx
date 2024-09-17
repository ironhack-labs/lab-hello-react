import React, { Component } from "react";
import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";
import Button from "./Button";

class Main extends Component {
  render() {
    return (
      <section className="main-card">
        <div className="main-nav">
          <img src={logo} alt="ironhack-logo" />
          <a href="">
            <img src={menu} alt="" />
          </a>
        </div>
        <div className="main-content-wrapper">
          <div className="main-content">
            <h1>
              Say hello to <br /> ReactJS
            </h1>
            <p>
              You will learn ho to use the most popular frontend library, and
              become a super Ninja developer.
            </p>
            <Button />
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
