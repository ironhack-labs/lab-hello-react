import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import desktop from "./images/desktop.png";
import laptop from "./images/laptop.png";
import wrench from "./images/wrench.png";
import lapCode from "./images/lapCode.png";
import CardItems from "./components/CardItems";
import Hero from "./components/Hero";


function App() {
  const cardsData = [
    {
      title: "Declarative",
      description: "React makes it painless to create interactive UIs",
      image: wrench,
    },
    {
      title: "Components",
      description: "Build encapsulated components that manage their state",
      image: laptop,
    },
    {
      title: "Single-Way",
      description: "A set of immutable values are passed to the component's",
      image: desktop,
    },
    {
      title: "JSX",
      description: "Statically-typed, designed to run on modern browsers.",
      image: lapCode,
    },
  ];

  // .map() function is used to iterate over the card data 
  //creates new card component for each object
  //we then pass the 'props' 

  return (
    <div className="App">
      <Hero>
        <Navbar />
        <Main />
      </Hero>
      <CardItems>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </CardItems>
    </div>
  );
}

export default App;
