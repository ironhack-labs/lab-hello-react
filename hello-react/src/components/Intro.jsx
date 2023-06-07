import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

// 1. Create a function that returns HTML or JSX content
//
// Your code here

function Intro() {
  return (
    <div>
      <div className="container">
        <h2>Declarative</h2>
        <p>React make it painless to create interactive UIs.</p>
        <img
          className="icon"
          src={icon1}
          alt="icon1"
        />
        
      </div>

      <div className="container">
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state</p>
        <img
          className="icon"
          src={icon2}
          alt="icon2"
        />
        
      </div>

      <div className="container">
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's</p>
        <img
          className="icon"
          src={icon3}
          alt="icon3"
        />
        
      </div>

      <div className="container">
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browser</p>
        <img
          className="icon"
          src={icon4}
          alt="icon4"
        />
        
      </div>
    </div>
  );
}
// 2. Export the function:
// export default ComponentName
export default Intro;
