import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
// import icon3 from '../assets/icon3.png'
// import icon4 from '../assets/icon4.png'

// 1. Create a function that returns HTML or JSX content
//
// Your code here

function Intro() {
  return (
    <div>
      <div className="container">
        <h2>Declarative</h2>;
        <p>React make it painless to create interactive UIs.</p>
        {icon1}
      </div>

      <div className="container">
        <h2>Components</h2>;
        <p>Build encapsulated components that manage their state</p>
        {icon2}
      </div>

      <div className="container">
        <h2>Declarative</h2>;
        <p>React make it painless to create interactive UIs.</p>
        {icon1}
      </div>

      <div className="container">
        <h2>Components</h2>;
        <p>Build encapsulated components that manage their state</p>
        {icon2}
      </div>
    </div>
  );
}
// 2. Export the function:
// export default ComponentName
export default Intro;
