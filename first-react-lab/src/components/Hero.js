import Navigation from "./Navigation";
import Heading from "./Heading";
import ButtonWhite from "./ButtonWhite";
import ReactLogo from "../logo.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <Navigation />
      <Heading />
      <ButtonWhite />
      <img src={ReactLogo} className="App-logo-1" alt="logo" />
      <img src={ReactLogo} className="App-logo-2" alt="logo" />
      <img src={ReactLogo} className="App-logo-3" alt="logo" />
      <img src={ReactLogo} className="App-logo-4 small" alt="logo" />
      <img src={ReactLogo} className="App-logo-5 small" alt="logo" />
      <img src={ReactLogo} className="App-logo-6 small" alt="logo" />
    </div>
  );
};

export default Hero;
