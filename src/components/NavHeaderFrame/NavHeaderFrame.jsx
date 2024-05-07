import React from "react";
import "./NavHeaderFrame.css";
import NavBar from "../navBar/navBar";
import Header from "../header/header";

function NavHeaderFrame() {
  return (
    <div className="NavHeaderFrame">
      <NavBar />
      <Header />
    </div>
  );
}

export default NavHeaderFrame;
