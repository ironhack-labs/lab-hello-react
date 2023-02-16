import ironhackLogo from "../../images/ironhack-logo-xs.png";
import menuTop from "../../images/menu-top-xs.png";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="navigationBar">
      <ul>
        <li>
          <img className="App-logo" src={ironhackLogo} alt="ironhackLogo" />
        </li>

        <li>
          <img src={menuTop} alt="menuTop" />
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
