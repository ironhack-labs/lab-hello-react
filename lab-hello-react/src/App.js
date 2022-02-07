import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import Ironhack from './images/Ironhack.png';
import Two_bars from './images/Two_bars.png';
import Code from './images/Code.png';
import Play from './images/Play.png';
import Settings from './images/Settings.png';
import Utilities from './images/Utilities.png';

const title = <h1>Say Hello to ReactJS</h1>;

function App() {

  const cardA = {
    image: Utilities, 
    title: "Declarative",
    text: "React makes it painless to create interactive UI."
  };

  const cardB = {
    image: Play, 
    title: "Components",
    text: "Build encapsulated components that manage their state."
  };

  const cardC = {
    image: Settings, 
    title: "Single-Way",
    text: "A set of immutable values are passed to the components."
  }

  const cardD = {
    image: Code, 
    title: "JSX",
    text: "Statically-typed, designed to run on modern browsers."
  }

  return (
    <div className="App">
      <header className="header">
        <div className="image-header">
          <img src={Ironhack} className="IH-logo" alt="" />
          <img src={Two_bars} className="menu" alt="" />
        </div>
        {title}
        <p>You will learn how to use the most popular frontend-library, and become a super Ninja Developer</p>
          <button className='button'>Awesome!</button>
      </header>
      <div className="Cards-main">
        <Cards {...cardA}/>
        <Cards {...cardB}/>
        <Cards {...cardC}/>
        <Cards {...cardD}/>
      </div>
    </div>
  );
}

export default App;
