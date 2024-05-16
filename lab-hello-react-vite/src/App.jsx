import logo from "./assets/images/ironhack-logo-xs.png";
import menuTop from "./assets/images/menu-top-xs.png";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import icon4 from "./assets/images/icon4.png";
import "./App.css";
import Card from "./components/Card";

const bodyCards = [
  {
    src: icon1,
    cardTitle: "Declarative",
    cardText: "React makes it painless to create interactive UIs.",
  },
  {
    src: icon2,
    cardTitle: "Components",
    cardText: "Bulti encapsulated components thatmange their state.",
  },
  {
    src: icon3,
    cardTitle: "Single-Way",
    cardText: "A set of immutable values are passed to the component's.",
  },
  {
    src: icon4,
    cardTitle: "JSX",
    cardText: "Statically-typed, designed to run on modern browsers.",
  },
];
function App() {
  return (
    <>
      <div className="App">
        <section className="section-main">
          <header className="header">
            <img src={logo} />
            <img src={menuTop} />
          </header>
          <h1 className="text-color">Say hello to ReactJS</h1>
          <p className="text-color main-text">
            You will learn how to use <br />
            the most popular frontend library, <br />
            and become a super ninja developer
          </p>
          <button className="button">Awesome!</button>
        </section>
        <section className="card-section">
          {bodyCards.map((card) => {
            return (
              <Card
                src={card.src}
                cardTitle={card.cardTitle}
                cardText={card.cardText}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}

export default App;
