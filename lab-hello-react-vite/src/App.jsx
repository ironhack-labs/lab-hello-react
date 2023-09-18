// src/App.jsx
import "./App.css";
import missingBun from "/src/assets/missingBun.png";
import logo from "/src/assets/ironhack-logo-xs.png";
import wrench from "/src/assets/wrench.png";
import mac from "/src/assets/mac.png";
import popup from "/src/assets/popup.png";
import youtube from "/src/assets/youtube.png";

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <div className="nav">
          <img src={logo} className="nav-image"></img>
          <img src={missingBun} className="nav-image"></img>
        </div>
        <div className="top-bottom">
          <h1>Say Hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library and
            become a super Ninja developer
          </p>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="bottom-container">
        <div className="card">
          <img src={wrench} className="thumbnails"></img>
          <h3>Declarative</h3>
          <p className="paragraphs-bottom">
            React makes it painless to create interactive UIs.
          </p>
        </div>
        <div className="card">
          <img src={youtube} className="thumbnails"></img>
          <h3>Components</h3>
          <p className="paragraphs-bottom">
            Build encapsulated components that manage their state.
          </p>
        </div>
        <div className="card">
          <img src={mac} className="thumbnails"></img>
          <h3>Single-Way</h3>
          <p className="paragraphs-bottom">
            A set of immutable values are passed to the component's.
          </p>
        </div>
        <div className="card">
          <img src={popup} className="thumbnails"></img>
          <h3>JSX</h3>
          <p className="paragraphs-bottom">
            Statically-typed designed to run on modern browsers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
