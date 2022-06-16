// import logo from './logo.svg';
import "./App.css";
import logo from "./images/logo.png";
import menuTop from "./images/menuTop.png";
import SecondContainer from "./SecondContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="nav">
          <img src={logo} alt="logo" />
          <img src={menuTop} alt="logo" />
        </div>
        <div className="textDiv">
          <h1>
            Say Hello to <br /> ReactJS
          </h1>
          <p className="containerText">
            You will learn how to use <br /> the most popular frontend library,
            <br /> and become a super Ninja developer
          </p>
          <button>Awsome!</button>
        </div>
      </div>

      <SecondContainer />
    </div>
  );
}

export default App;
