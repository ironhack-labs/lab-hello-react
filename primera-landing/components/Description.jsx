import Icono1 from "../src/assets/icon1.png"
import Icono2 from "../src/assets/icon2.png"
import Icono3 from "../src/assets/icon3.png"
import Icono4 from "../src/assets/icon4.png"

function Description() {
    return(
        <div id="descripcion">
            <div>
            <img src= {Icono1} alt="icono1" />
            <h3>Declarative</h3>
            <p>React makes it <br /> painless to create <br /> interactive UIs</p>
            </div>
            <div>
                <img src= {Icono2} alt="icono2" />
                <h3>Components</h3>
                <p>Build encapsulated <br /> components that <br /> manage their state.</p>
            </div>
            <div>
                <img src= {Icono3} alt="icono3" />
                <h3>Single-Way</h3>
                <p>A set of immutable <br /> values are passed to <br /> the comonent's.</p>
            </div>
            <div>
                <img src= {Icono4} alt="icono4" />
                <h3>JSX</h3>
                <p>Statically-typed, <br /> designed to run on <br /> modern browsers.</p>
            </div>
        </div>
    )
}

export default Description