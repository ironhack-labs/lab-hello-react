import React, {Fragment} from "react"
import Logo from "../Img/ironhack-logo-xs.png"
import menu from "../Img/menu-top-xs.png"

export const Header = () => {
  return (
      <Fragment>
          <header>
              <img src={Logo} alt="logo"/>
              <img src={menu} alt="menu"/>
          </header>
      </Fragment>
  );
}


