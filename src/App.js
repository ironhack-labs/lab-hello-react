import "./App.css";
import ImageOne from "./components/ImageOne";
import ImageTwo from "./components/ImageTwo";
import ImageThree from "./components/ImageThree";
import ImageFour from "./components/ImageFour";
import ImageFive from "./components/ImageFive";
import ImageSix from "./components/ImageSix";

function App() {
  return (
    <div className="App">
      <div className="intro">
        <div className="nav-bar">
          <ImageOne />
          <ImageTwo />
        </div>

        <h1 className="title">Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>

      <div className="icons">
        <div className="icon">
          <ImageThree />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="icon">
          <ImageFour />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="icon">
          <ImageFive />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the the component's.</p>
        </div>

        <div className="icon">
          <ImageSix />
          <h3>JSX</h3>
          <p>Statically-typped, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
