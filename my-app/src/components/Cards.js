import card1 from "../images/icon1.png";
import card2 from "../images/icon2.png";
import card3 from "../images/icon3.png";
import card4 from "../images/icon4.png";

function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <img src={card1} alt="" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="card">
        <img src={card2} alt="" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="card">
        <img src={card3} alt="" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className="card">
        <img src={card4} alt="" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Cards;
