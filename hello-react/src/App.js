import logo from "./images/logo.png";
import menu from "./images/menu.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="mainBody">
        <div className="bodyHeader">
          <img src={logo} alt="logo" className="logoImg" />
          <img src={menu} alt="menu" />
        </div>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library and become
          a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
      <div className="features">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <img src={img4} alt="img4" />
      </div>
    </div>
  );
}

export default App;
