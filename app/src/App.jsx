import "./App.css";
import Hero from "./components/Hero";
import CardsContainer from "./components/CardsContainer";

import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

const cardData = [
  {
    id: 1,
    imgUrl: icon1,
    title: "Declarative",
    text: "React makes it painless to create interactive UIs.",
  },
  {
    id: 2,
    imgUrl: icon2,
    title: "Components",
    text: "Build encapsulated components that manage their state.",
  },
  {
    id: 3,
    imgUrl: icon3,
    title: "Single-Way",
    text: "A set of immutable values are passed to the components.",
  },
  {
    id: 4,
    imgUrl: icon4,
    title: "JSX",
    text: "Statically-typed, designed to run on modern browsers.",
  },
];

export default function App() {
  return (
    <div className="App">
      <Hero />
      <CardsContainer cardData={cardData} />
    </div>
  );
}
