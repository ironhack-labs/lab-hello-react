import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon4.png'
import icon4 from '../images/icon4.png'

function Footer() {
    return (
<div className="footer">
<div>
<img
          id="icon1"
          src={icon1}
          alt="icon1"
        />
        <h4>Declarative</h4>
        <p className="slogan">React makes it painless to create interactive Uls.</p>
        </div>
        <div>
             <img
          id="icon2"
          src={icon2}
          alt="icon2"
        />
         <h4>Components</h4>
        <p className="slogan">Build encapsulated components that manage their state</p>
        </div>
        <div>
        <img
          id="icon3"
          src={icon3}
          alt="icon3"
        />
         <h4>Single-Way</h4>
        <p className="slogan">A set of immutable values are passed to the component´s.</p>
        </div>
        <div>
        <img
          id="icon4"
          src={icon4}
          alt="icon4"
        />
         <h4>JSX</h4>
        <p className="slogan">Staticallly-typed, design to run on modern browsers.</p>
        </div>
    
</div>
    );
  }  
  export default Footer;