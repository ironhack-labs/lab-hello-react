import herramientaImg from "../assets/herramienta.png";
import tornilloImg from "../assets/tornillo.png";
import etiquetaImg from "../assets/aperturaycierre.png";
import ruedaImg from "../assets/rueda.png";

function Footer() {
  return (
    <div id="divPadre">
      <div className="propiedades">
        <img src={tornilloImg} alt="tornillo" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>

      <div className="propiedades">
        <img src={herramientaImg} alt="herramienta" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>

      <div className="propiedades">
        <img src={ruedaImg} alt="rueda" />
        <h3>Singles-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>

      <div className="propiedades">
        <img src={etiquetaImg} alt="etiqueta" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Footer;
