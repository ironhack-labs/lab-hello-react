import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";

function App() {
  const headline = "hello to react.js";
  return (
    <div className="App">
      <Header headline = {headline}/>  
    </div>
  );
}

export default App;
