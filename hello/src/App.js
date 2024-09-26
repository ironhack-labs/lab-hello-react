import './App.css';
import Header from "./components/Header";
import img1 from './images/comp.png';
import img2 from './images/comp1.png';
import img3 from './images/comp2.png';
import img4 from './images/comp3.png';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="images">
        <div>
          <img src={img1} alt="this is an image" />
          <h2>Declarative</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
          <img src={img2} alt="this is an image" />
          <h2>Components</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
          <img src={img3} alt="this is an image" />
          <h2>Single-Way</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
          <img src={img4} alt="this is an image" />
          <h2>JSX</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
}
export default App;