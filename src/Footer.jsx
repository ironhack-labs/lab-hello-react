import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import icon4 from "./assets/images/icon4.png";

function Footer() {
  return (
    <footer id="footerImg">
      <div>
        <img src={icon1} height="100px" alt="" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src={icon2} height="100px" alt="" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img src={icon3} height="100px" alt="" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div>
        <img src={icon4} height="100px" alt="" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </footer>
  );
}
export default Footer;
