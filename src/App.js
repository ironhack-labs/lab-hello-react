import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png'
const heading = <h1>Say hello to ReactJS!</h1>

function App() {
  return (
    <div className="App">{heading}
    <img src={ironhackLogo} alt="ironhack logo" />
    <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
    </div>
  );
};

export default App;
