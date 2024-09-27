import React from "react";
import ironhack from "../assets/images/ironhacklogo.png";
import hamburguer from "../assets/images/hamburguer.png";

function Navbar() {
  return (
    <div>
      <img src={ironhack} alt="ironhack logo" />
      <img src={hamburguer} alt="hamburguer icon" />
    </div>
  );
}

export default Navbar;
