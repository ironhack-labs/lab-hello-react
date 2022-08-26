// import logo from './logo.svg';
import logo from "./images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69726f6e6861636b2d6c6f676f2d78732d6461726b2e706e67.png";
import bar from "./images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f6d656e752d746f702d78732d6461726b2e706e67.png";
import er1 from "./images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e322e706e67.png";
import er2 from "./images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e332e706e67.png";
import er3 from "./images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e342e706e67.png";
import er4 from "./images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e312e706e67.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="backgroundBlack">
        <div id="logos">
          <img className="navbar-logo1" src={logo} alt="Locura maxima" />
          <img className="navbar-logo2" src={bar} alt="Locura maxima" />
        </div>
        <div className="textBoxing">
          <h1>Say hello to </h1>
          <h1>ReactJS </h1>
          <article>
            {" "}
            You will learn how to use <br></br> the most popular frontend
            library, <br></br>and become a super Ninja developer
          </article>
          <button> Awesome!</button>
        </div>
      </div>

      <div id="bottompart">
        <div className="boxes">
          <img src={er4} alt="Locura maxima" />
          <h2>Declarative </h2>
          <article>
            React makes it <br></br>painless to create <br></br>interactive UIs
          </article>
        </div>
        <div className="boxes">
          <img src={er1} alt="Locura maxima" />
          <h2>Components </h2>
          <article>
            Build encapsulated <br></br>components that <br></br>manage their state.
          </article>
        </div>
        <div className="boxes">
          <img src={er2} alt="Locura maxima" />
          <h2>Single-Way </h2>
          <article>
            A set of immutable<br></br>values are passed to<br></br>the component's
          </article>
        </div>
        <div className="boxes">
          <img src={er3} alt="Locura maxima" />
          <h2>JSX </h2>
          <article>
            Satically-typed, <br></br>designes to run on<br></br>modern browsers.
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
