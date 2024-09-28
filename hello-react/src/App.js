// src/App.js
import "./App.css";
import Headline from "./components/headline";
import Subline from "./components/subline";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import Declarative from "./components/declarative"




function App() {
  return (
    <div className="App">
      <Headline />
      <Subline />
      <img src={icon1} alt="icon1 image" />;
      <h3>Declarative</h3>
      <Declarative />
      <img src={icon2} alt="icon2 image" />;
      <img src={icon3} alt="icon3 image" />;
      <img src={icon4} alt="icon4 image" />;
    </div>
  );

 
}
export default App;
