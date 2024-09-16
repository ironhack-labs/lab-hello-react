import logo from './logo.svg';
import ironhack from "./ironhack.png"
import menu from "./menu.png"
import settings from "./settings.png"
import media from "./media.png"
import dev from "./dev.png"
import code from "./code.png"
import './App.css';


function App() {
  return (
    <div className='container'>

      <nav>
        <img src={ironhack} className="ironhack-logo"/>
        <img src={menu} className="menu"/> 
      </nav>

      <div className='title'>
        <span>Say hello to</span>
        <br></br>
        <span>ReactJS</span>
      </div>

      <div className='text'>
        <p>You will learn how to use</p>
        <p>the most popular frontend library,</p>
        <p>and become a super Ninja developer.</p>
      </div>

      <div className='buttonContainer'>
        <button className='button'>
          Awesome!
        </button>
      </div>


    <div className="imagesContainer">
        <div className="images">
          <img src={settings} />
          <h3> Declarative</h3>
          <p> React makes it</p>
          <p> painless to create</p>
          <p> intective UIs.</p>
        </div>

        <div className="images">
          <img src={media} />
          <h3> Components</h3>
          <p> Build encapsulated</p>
          <p> components that</p>
          <p> manage their state.</p>
        </div>

        <div className="images">
          <img src={dev} />
          <h3> Single-Way</h3>
          <p> A set of immutable</p>
          <p> values are passed to</p>
          <p> the component's.</p>
        </div>

        <div className="images">
          <img src={code} />
          <h3> JSX</h3>
          <p> Statically-typed</p>
          <p> designed to run on</p>
          <p> modern browsers</p>
        </div>
      </div>
    </div>
  );
}
export default App;
