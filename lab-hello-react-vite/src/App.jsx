// src/App.jsx
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import LandingText from "./components/landingText/LandingText";
import FeaturesList from "./components/featuresList/FeaturesList";

function App() {
  return (
    <div className="App">
      <div className="LandingPage">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="LandingText">
          <LandingText />
        </div>
      </div>
      <div className="FeaturesList">
        <FeaturesList />
      </div>
    </div>
  );
}

export default App;
