// src/App.js
import './App.css';
// import logo from './images/Ironhack Student Portal.png'
// import menu from './images/menu-top-xs.png'
import Header from './components/Header';
import Card from './components/Cards';
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

const card1 = {
    img: icon1,
    name: "Declarative",
    description: "React makes it painless to create interactive UIs."
}
const card2 = {
    img: icon2,
    name: "Components",
    description: "Build encapsulated components that manage their state."
}
const card3 = {
    img: icon3,
    name: "Single-Way",
    description: "A set of immutable values are passed to the component's."
}
const card4 = {
    img: icon4,
    name: "JSX",
    description: "Statically-typed, designed to run on modern browsers."
}

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Info-box">
        <Card card = {card1}/>
        <Card card = {card2}/>
        <Card card = {card3}/>
        <Card card = {card4}/>
      </div>
    </div>
  );
}

export default App;

