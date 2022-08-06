import "./App.css";
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menutop from "./images/menu-top-xs.png";
import iconOne from "./images/icon1.png";
import iconTwo from "./images/icon2.png";
import iconThree from "./images/icon3.png";
import iconFour from "./images/icon4.png";
import MyButton from "./components/MyButton";

const heading = <h1>Say hello to ReactJS!</h1>;
const introduction = (
  <p>
    You will learn how to use the most popular frontend library, and become a
    super Ninja developer.
  </p>
);

function App() {
  return (
    <div className="App-header">
      <img src={ironhackLogo} alt="ironhack logo" />
      <img src={menutop} alt="menu" />
      {heading} {introduction}
      <MyButton />
      <h2>
        <img src={iconOne} alt="icon one" />{" "}
        <img src={iconTwo} alt="icon two" />
        <img src={iconThree} alt="icon three" />
        <img src={iconFour} alt="icon four" />
      </h2>
    </div>
  );
}

export default App;
