/* eslint-disable jsx-a11y/alt-text */
//1.IMPORTACIONES
import React from "react";
import logo from "./../images/ironhack-logo-xs.png";
import menu from "./../images/menu-top-xs.png";
export default function Header() {
  return (
    <div className="header">
      <img src={logo} />
      <img className="menu" src={menu} />
    </div>
  );
}
