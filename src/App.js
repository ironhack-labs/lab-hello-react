import "./App.css";
import Article from "./components/Article";
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menuButton from "./images/menu-top-xs.png";
import declarativeImg from "./images/icon1.png";
import componentsImg from "./images/icon2.png";
import singleWayImg from "./images/icon3.png";
import jsxImg from "./images/icon4.png";

const articles = [
  {
    img: declarativeImg,
    heading: "Declarative",
    text: "React makes it painless to create interactive UIs.",
  },
  {
    img: componentsImg,
    heading: "Components",
    text: "Buils encapsulated components that manage their state.",
  },
  {
    img: singleWayImg,
    heading: "Single-Way",
    text: "A set of immutable values are passed to the component's.",
  },
  {
    img: jsxImg,
    heading: "JSX",
    text: "Statically-typed. designed to run on modern browsers.",
  },
].map(i => <Article img={i.img} heading={i.heading} text={i.text} />);

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={ironhackLogo} alt="ironhack logo" />
          <img src={menuButton} alt="menu button" />
        </nav>

        <section className="welcome-msg">
          <h1>Say hello to ReactJs</h1>

          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>

          <div className="reaction">Awesome!</div>
        </section>
      </header>

      <main>{articles}</main>
    </div>
  );
}

export default App;
