import "./Section.css";
import iconeLogo from "../images/ironhack-logo-xs.png";
import menuForm from "../images/menu-top-xs.png";
import icone1 from "../images/icon1.png";
import icone2 from "../images/icon2.png";
import icone3 from "../images/icon3.png";
import icone4 from "../images/icon4.png";

function Section() {
  return (
    <div>
    <div className="Section">
      <nav className="nav-bar">
        <img src={iconeLogo} alt="logo" className="logo" />
        <img src={menuForm} alt="menu" className="menu" />
      </nav>

      <div className="header1">
        <h1>Say hello to ReactJS</h1>
      </div>
      <div className="header2">
        <h4>You will learn how to use
         the most popular frontend library, 
         and become a super Ninja developer.</h4>
      </div>
      <div>
      <button className="button">Awesome!</button>
      </div>
      </div>
<section className="card">
<section className="section-card">
  <img src={icone1} alt="icone1" />
  <h2>Declarative</h2>
  <p> React makes it painless to create interative UIs. </p>
  </section>

  <section className="section-card">
  <img src={icone2} alt="icone2" />
  <h2>Components</h2>
  <p> Build encapsulated components that manage their state.</p>
  </section>

  <section className="section-card">
  <img src={icone3} alt="icone3" />
  <h2>Single-Way</h2>
  <p> A set of immutable values are passed to the component's.</p>
  </section>

  <section className="section-card">
  <img src={icone4} alt="icone4" />
  <h2>JSX</h2>
  <p>Statically-typed, designed to run on modern browsers.</p>
  </section>

</section>
    </div>

    
  );
}

export default Section;