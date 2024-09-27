// import logo from "./logo.svg";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import MainSection from "./components/MainSection/MainSection.jsx";
import SecondSection from "./components/SecondSection/SecondSection.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <br />

      <MainSection />
      <br />

      <SecondSection />
    </div>
  );
}

export default App;
