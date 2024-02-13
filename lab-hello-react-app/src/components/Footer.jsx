import img1 from "../assets/icon1.png"
import img2 from "../assets/icon2.png"
import img3 from "../assets/icon3.png"
import img4 from "../assets/icon4.png"

const texto = {
    color:"grey",
    padding: "5px"
}

function Footer() {
    return (
        <section>
        <ul className ="contenedor">  
          <li>
          <img  src={img1} alt="icon1" />
            <h2>Declarative</h2>
            <p style={texto}>Reac makes it painless to create interactive UIs.</p>
          </li>
          <li>
              <img  src={img2} alt="icon2" />
            <h2>Components</h2>
            <p style={texto}>Build encapsuled components that manage their state.</p>
          </li>
          <li>
          <img  src={img3} alt="icon3" />
            <h2>Single-Way</h2>
            <p style={texto}>A set of immutable values are passed to the component´s.</p>
          </li>
          <li>
          <img  src={img4} alt="icon4" />
            <h2>JSX</h2>
            <p style={texto}>Statically-typed designed to run on modern browsers.</p>
          </li>
        </ul>
      </section>
    )
}

export default Footer