// src/App.js
import "./App.css";
import logo from "./images/ironhack-logo-xs.png";
import menuTop from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "#1f2535",
          color: "white",
          height: "50vh",
          paddingBottom: "30px",
        }}
      >
        <div
          style={{
            margin: "0 10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img src={logo} alt="logo" />
            <img src={menuTop} alt="logo" />
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <h1 style={{ fontSize: "60px", lineHeight: "60px" }}>
              Say hello to ReactJS
            </h1>
            <p style={{ marginTop: "-30px" }}>
              You will learn how to use <br /> the most popular frontend
              library,
              <br /> and become a super Ninja developer.
            </p>
            <button style={{ fontSize: "20px", padding: "15px" }}>
              Awesome!
            </button>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <img src={icon1} alt="logo" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} alt="logo" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon3} alt="logo" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon4} alt="logo" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
      </div>
    </div>
  );
}
export default App;
