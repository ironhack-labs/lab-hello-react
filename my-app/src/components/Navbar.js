import React, { Component } from "react";
import ironLogo from "../images/ironhack-logo-xs.png";
import listLogo from "../images/menu-top-xs.png";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <img src={ironLogo} alt="logo" />
        <img src={listLogo} alt="logo" />
      </nav>
    );
  }
}

export default Navbar;
