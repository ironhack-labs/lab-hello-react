// import logo from "./logo.svg";
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import "./App.css";
import card1 from "./images/icon1.png";
import card2 from "./images/icon2.png";
import card3 from "./images/icon3.png";
import card4 from "./images/icon4.png";

function App() {
  return (
    <>
      <div className="App">
        <img src={logo} alt="example" className="navbar-col navbar-item" />
        <img
          src={menu}
          alt="example"
          className="navbar-col-right navbar-item navbar-item-small "
        />
        <div className="content">
          <h1 className="title">
            Say hello to <br />
            ReactJS
          </h1>
          <p>You will learn how to use</p>
          <p>the most popular frontend library,</p>
          <p>and become a super Ninja developer</p>
          <button>Awesome!</button>
          <img src="./images/menu-top-xs.png" alt="" />
        </div>
      </div>
      <section>
        <div className="card-container">
          <div className="card">
            <img className="card-img" src={card1} alt="img" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interractive UIs</p>
          </div>
          <div className="card">
            <img className="card-img" src={card2} alt="img" />

            <h2>Components</h2>
            <p>Build encaspulated components that manage their state</p>
          </div>
          <div className="card">
            <img className="card-img" src={card3} alt="img" />

            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's</p>
          </div>
          <div className="card">
            <img className="card-img" src={card4} alt="img" />

            <h2>JSX</h2>
            <p>Statitically-typed designed to run on modern browsers</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
