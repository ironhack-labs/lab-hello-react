// src/App.jsx
import "./App.css";
import Navbar from "./components/Navbar";
import Middle from "./components/Middle";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

const icons = [
  {
    image: icon1,
    texthead: "Declarative",
    text: "some text",
  },
  {
    image: icon2,
    texthead: "Component",
    text: "Build encapsulated...",
  },
  {
    image: icon3,
    texthead: "icon3 main",
    text: "A set of...",
  },
  {
    image: icon4,
    texthead: "icon4 main",
    text: "Statically-typed....",
  },
];

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Middle />
      <Button />
      <Gallery image={icons[0].image} texthead ={icons[0].texthead} text={icons[0].text}/>
      <Gallery image={icons[1].image} texthead ={icons[1].texthead} text={icons[1].text}/>
      <Gallery image={icons[2].image} texthead ={icons[2].texthead} text={icons[2].text}/>
      <Gallery image={icons[3].image} texthead ={icons[3].texthead} text={icons[3].text}/>
    </div>
  );
}

export default App;
