import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const cards = [
    { title: "Declarative", description: "React makes it painless to create interactive UIs.", imageUrl: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" },
    {
      title: "Components",
      description: "Build encapsulated components that management their state.",
      imageUrl: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
    },
    {
      title: "Single-Way",
      description: "A set of immutable values are passed to the component's.",
      imageUrl: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
    },
    { title: "JSX", description: "Statically-typed designed to run on modern browsers.", imageUrl: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" },
  ];

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="card-row">
          {cards.map((card) => (
            <Card content={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
