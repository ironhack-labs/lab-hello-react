import "./App.css";
import logo from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-vs.png";

function App() {
  return (
    <>
      <div id="navbar">
        <img src={logo} alt="Discord Logo" />
        <img src={menu} alt="Menu Icon" />
      </div>
      <div id="body">
        <div id="text">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div id="b1" className="button">
            Download for Mac
          </div>
          <div id="b2" className="button">
            Open Discord in your browser
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
