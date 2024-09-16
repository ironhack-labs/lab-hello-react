import "./App.css";
import CardsItem from "./Components/Cards";
import img1 from "./images/icon1.png";
import img2 from "./images/icon2.png";
import img3 from "./images/icon3.png";
import img4 from "./images/icon4.png";
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";

function App() {
  const listCards = [
    {
      image: <img src={img1} alt="image 1" height="100px" />,
      title: "Declarative",
      text: "React makes it painless to create interactive UIs.",
    },
    {
      image: <img src={img2} alt="image 2" height="100px" />,
      title: "Components",
      text: "Build encapsulated components that manager their state.",
    },
    {
      image: <img src={img3} alt="image 3" height="100px" />,
      title: "Single-Way",
      text: "A set of immutable values are passed to the component's.",
    },
    {
      image: <img src={img4} alt="image 4" height="100px" />,
      title: "JSX",
      text: "Statically-typed, designed to run on modern browsers.",
    },
  ];

  return (
    <div className="App">
      <div className="App-navbar">
        <img src={logo} alt="logo" />
        <img src={menu} alt="menu" height="10px" />
      </div>
      <div className="App-header">
        <div className="title">
          <h1>
            Say hello to 
            ReactJS
          </h1>
        </div>
        <p>
          you will learn how to use the most popular frontend library, and
          become a super Ninja developer
        </p>
        <button className="button">Awesome!</button>
      </div>
      <div className="App-body">
        {listCards.map((card, index_card) => (
          <CardsItem
            key={index_card}
            image={card.image}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
