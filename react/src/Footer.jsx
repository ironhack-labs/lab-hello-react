import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function Footer() {
  return (
    <div>

      <img src={icon1} width="100px" alt="icon1" />
      <h2>Declarative</h2>
      <p>React makes it painless to creat interactive Uls.</p>

      <img src={icon2} width="100px" alt="icon2" />
      <h2>Components</h2>
      <p>Build encapsulated components that manage their state.</p>

      <img src={icon3} width="100px" alt="icon3" />
      <h2>Single-Way</h2>
      <p>A set of immutable values are passed to the component's.</p>

      <img src={icon4} width="100px" alt="icon4" />
      <h2>JSX</h2>
      <p>Statically-typed, designed to run on modern browsers.</p>

    </div>
  );
}

export default Footer
