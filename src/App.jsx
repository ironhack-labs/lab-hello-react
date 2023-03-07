import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./App.css";
import { cards } from "./api/cards";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {cards.map((info, index) => (
        <Card key={index} title={info.title} text={info.text} img={info.img} />
      ))}
    </div>
  );
};

export default App;
