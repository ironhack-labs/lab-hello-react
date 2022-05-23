import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Features from "./components/Features";
import wrench from "./assets/images/icon1.png";
import pen from "./assets/images/icon2.png";
import gear from "./assets/images/icon3.png";
import code from "./assets/images/icon4.png";

const data = {
  main: {
    title: "Say hello to ReactJS",
    infoText:
      "You will learn how to use the most popularfrontend library, and become a super Ninja developer.",
    btnText: "Awesome",
  },
  features: [
    {
      title: "Declarative",
      content: "React makes it painless to create interactive UIs",
      image: wrench,
    },
    {
      title: "Components",
      content: "Build encapsulated components that manage their state.",
      image: pen,
    },
    {
      title: "Single-Way",
      content: "A set of immutablev values are passed to the component´s.",
      image: gear,
    },
    {
      title: "JSX",
      content: "Statically-typed, designed to run on modern browsers.",
      image: code,
    },
  ],
};

function App() {
  const { main, features } = data;
  return (
    <div className='App'>
      <main>
        <Navbar />
        <MainContent data={main} />
      </main>
      <Features features={features} />
    </div>
  );
}

export default App;
