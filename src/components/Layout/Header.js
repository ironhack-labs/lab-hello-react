import React from "react";
import Nav from "./Nav";
import TitleHeader from "../Main/TitleHeader";
import Subtitle from "../Main/Subtitle";
import Awesome from "../Main/Awesome";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Nav />
        <div className="body-container">
          <TitleHeader />

          <Subtitle />

          <Awesome />
        </div>
      </div>
    </div>
  );
}

export default Header;
