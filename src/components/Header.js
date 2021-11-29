import ironhackLogo from "../images/ironhack-logo-xs.png";
import menuTop from "../images/menu-top-xs.png";

function Header() {
  return (
    <div>
    <div class="box-wrapper">
    <div>
      <nav>
        <div>
          <img src={ironhackLogo} alt="IronHack's logo" />
        </div>
        <div>
          <img src={menuTop} alt="IronHack's logo" />
        </div>
      </nav>
      </div>
      </div>
      <div class="box-wrapper">
        <section class="App-header">
          <h1>Say hello to ReactJs</h1>
          <p id="Header-text">
            You will learn how to use <br></br>
            the most popular frontend librery<br></br>
            and become a super Ninja developer
          </p>
          <button id="Header-button">Awesome!</button>
        </section>
      </div>
    </div>
  );
}

export default Header;
