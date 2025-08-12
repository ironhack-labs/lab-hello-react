import ironhackLogo from "../assets/ironhack-logo-xs.png";
import menuIcon from "../assets/menu-top-xs.png";
function ReactHeader() {
  return (
    <div id="header">
      <nav>
        <img src={ironhackLogo} id="ironhack-logo"></img>
        <img src={menuIcon} id="menu-icon"></img>
      </nav>
      <section>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use <br/>the most popular frontend library, <br />and
          become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </section>
    </div>
  );
}

export default ReactHeader;
