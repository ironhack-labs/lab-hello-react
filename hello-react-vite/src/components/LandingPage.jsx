import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import ironhackLogo from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-xs.png";

function LandingPage() {
  return (
    <>
      <main>
        <section className="navbar">
          <img className="logo" src={ironhackLogo} alt="logo" />
          <img className = "menu" src={menu} alt="menu" />
        </section>

        <section className="content">
          <h1>Say hello to ReactJS</h1>
          <p>
            you will learn how to use the most popular frontend library, ande
            becomer a super Ninja developer
          </p>
          <button>Awesome</button>
        </section>
      </main>

      <section className="features">
        <article className="feature">
          <img src={icon1} alt="declarative" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </article>

        <article className="feature">
          <img src={icon2} alt="Components" />
          <h3>Components</h3>
          <p>Build encapsulated components thar manage their state.</p>
        </article>

        <article className="feature">
          <img src={icon3} alt="Single-Way" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components.</p>
        </article>

        <article className="feature">
          <img src={icon4} alt="JSX" />
          <h3>JSX</h3>
          <p>A set of immutable values are passed to the components.</p>
        </article>
      </section>
    </>
  );
}
export default LandingPage;
