import "./App.css";

import logo from "./images/Ironhack-logo.png";
import search from "./images/search-bar.png";
import chave from "./images/chave-parafuso.png";
import Play from "./images/monitor-play.png";
import engrenagem from "./images/monitor-engrenagem.png";
import monitor from "./images/monitor-tag.png";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="top">
        <div className="navbar">
          <img src={logo} alt="logoIH" />
          <img src={search} alt="menu" />
        </div>

        <div className="top-text">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <Button />
          <img src={chave} alt="monitor Chave" />
          <p>React makes it painless to create intereactive UIs</p>
          <img src={Play} alt="monitor play" />
          <p>Build encapsulated components that manage their state</p>
          <img src={engrenagem} alt="monitor engrenagem" />
          <p>A set of immutable values are passed to the component`s</p>
          <img src={monitor} alt="monitor tags" />
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;
