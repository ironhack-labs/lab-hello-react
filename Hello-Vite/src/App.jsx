
import Card from "./card";
import Header from "./Header";
import './App.css';

function App() {
  return (
    <>
      <Header />

      <div className="cards-container">
        <Card
        image="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
        title="Declarative"
        text="React makes it painless to create interactive UIs."
        />
        <Card
        image="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
        title="Components"
        text="Build encapsulated components that manage their state."
        />
        <Card
        image="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
        title="Single-Way"
        text="A set of immutable values are passed to the component's."
        />
        <Card
        image="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
        title="JSX"
        text="Statically-typed, designed to run on modern browsers."
        />
        
      </div>



    </>
  );
}

export default App;