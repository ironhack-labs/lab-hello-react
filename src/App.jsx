import Header from "./components/header";
import Cards from "./components/cards";
import NavBar from "./components/navBar";

function App() {
  return (
    <>
      <div className="bg-dark text-light header-general">
        <NavBar />
        <Header />
      </div>
      <div className="cards-general row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
        <Cards
          title="Declarative"
          text="React makes it painless to create interactive UIs"
          URLImg="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
        />
        <Cards
          title="Components"
          text="Build encapsulated components that manager their state."
          URLImg="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
        />
        <Cards
          title="Single-Way"
          text="A set of immutable values are passed to the components's"
          URLImg="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
        />
        <Cards
          title="JSX"
          text="Statically-typed designed to run on modern browsers"
          URLImg="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
        />
      </div>
    </>
  );
}

export default App;
