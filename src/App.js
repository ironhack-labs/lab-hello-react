// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import Content from "./components/Content";
import Button from "./components/Button";
import Services from "./components/Services";
import image1 from "../src/images/img1.png";
import image2 from "../src/images/img2.png";
import image3 from "../src/images/img3.png";
import image4 from "../src/images/img4.png";
import image5 from "../src/images/img5.png";
import image6 from "../src/images/img6.png";


function App() {
  return (
    <div className="App">
    <div className="navbar-row">
      <Navbar navImg={image1}></Navbar>
      <Navbar navImg={image2}></Navbar>
      </div>
      <Headline></Headline>
      <Content></Content>
      <Button></Button>
      <div className="services-row">
      <Services
        imgSrc={image3}
        sublineServ="Declarative"
        contentServ="React makes it painless to create interactive UIs."
      ></Services>
      <Services 
        imgSrc={image4}
        sublineServ="Components"
        contentServ="Build encapsulated components that manage their state."
      ></Services>
      <Services 
        imgSrc={image5}
        sublineServ="Single-Way"
        contentServ="A set of immutable values are passed to the component's"
      ></Services>
      <Services
        imgSrc={image6}
        sublineServ="JSX"
        contentServ="Statically-typed, designed to run on modern browsers."
      ></Services>
    </div>
    </div>
  );
}

export default App;
