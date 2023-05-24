import './App.css';
import logo from "./images/logo1.png";
import lines from "./images/twobars.png";
import wrench from "./images/wrench.png";
import pluma from "./images/pluma.png";
import gear from "./images/gear.png";
import file from "./images/file.png";

function App() {
  return (
    <div className="App">
      <div id="topDiv">
        <div id="imagesDiv">
          <img src={logo} alt=""/>
          <img src={lines} alt="" />
        </div>
          <div id="textDiv">
            <h1>Say hello to ReactJS</h1>
            <div id="smallText">
              <p>You will learn how to use the most popular frontend library and become a super Ninja developer.</p>
            </div>
            <button>Awesome!</button>
          </div>
      </div>
      <div id="bottomDiv">
        <div>
          <img src={wrench} alt="" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={pluma} alt="" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={gear} alt="" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div>
          <img src={file} alt="" />
          <h2>JSX</h2>
          <p>Statically typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;

