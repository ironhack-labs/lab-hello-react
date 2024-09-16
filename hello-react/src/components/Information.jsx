import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

function Information() {
  return (
    <section id="information">
      <div>
        <img src={icon1} alt="icono1" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src={icon2} alt="icono2" />
        <h3>Components</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src={icon3} alt="icono3" />
        <h3>Single-Way</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src={icon4} alt="icono4" />
        <h3>JSX</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
    </section>
  );
}

export default Information;
