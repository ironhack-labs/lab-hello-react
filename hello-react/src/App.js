// import logo from './logo.svg';
import "./App.css";
import ironhackLogo from "./images/ironhack-logo-xs.png"
import menuLogo from "./images/menu-top-xs.png"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"


function App() {
  return <div className="App">
    <div className="bluePartDiv">
      <TopBar />
      <SayHello />
    </div>
    <div className="iconsInfoDiv">
      <PictureTitleText image={icon1} title="Declarative" text="React makes it painless to create interactive UIs." />
      <PictureTitleText image={icon2} title="Components" text="Build encapsulated components that manage their state." />
      <PictureTitleText image={icon3} title="Singe-Way" text="A set of immutable values are passed to the components." />
      <PictureTitleText image={icon4} title="JSX" text="Statically-typed, designed to run on modern browsers." />
    </div>
  </div>;
}

const TopBar = () => {
  return (
    <div className="topBarDiv">
      <img src={ironhackLogo} alt="ironhacklogo" />
      <img src={menuLogo} alt="menuBarImg" />
    </div>
  )
}

const SayHello = () => {
  return (
    <div className="sayHelloDiv">
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
      <p className="awesome">Awesome!</p>
    </div>
  )
}

const PictureTitleText = props => {
  return (
    <div className="pictureTitleTextDiv">
      <img src={props.image} alt="icon1img" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}
export default App;
