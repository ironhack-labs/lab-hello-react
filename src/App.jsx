import Header from "./components/Header";
import Card from "./components/Card";
import { cards } from "./api/cards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="cards">
        {cards.map((info, index) => (
          <Card
            key={index}
            title={info.title}
            text={info.text}
            img={info.img}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
