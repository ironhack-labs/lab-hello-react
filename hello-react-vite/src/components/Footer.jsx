import imag3 from "../assets/images/image3.png"
import imag4 from "../assets/images/image4.png"
import imag5 from "../assets/images/image5.png"
import imag6 from "../assets/images/image6.png"

function Footer() {
    return (
    <div class= "images-footer">
        <div>
    <img src={imag3} alt="" />
    <h2>Declarative</h2>
    <p>React makes it painless to create interactive Uls.</p>
    </div>
    <div>
    <img src={imag4} alt="" />
    <h2>Componets</h2>
    <p>Build encapsulated componets that manage their state.</p>
    </div>
    <div>
    <img src={imag5} alt="" />
    <h2>Singles-Way</h2>
    <p>A set of immutable values are passed to the components</p>
    </div>
    <div>
    <img src={imag6} alt="" />
    <h2>JSX</h2>
    <p>Statically-typed. designed to run on modern browsers</p>
    </div>
      </div>
    )

      }

      export default Footer;