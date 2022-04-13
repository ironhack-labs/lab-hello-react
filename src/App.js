import './App.css';
import Top from "./components/top.js"
import Bottom from "./components/bottom.js"

function App() {
  return (
    <div className="App">
      <Top />
      <div className="bottom-part">
        <Bottom picture = "images/icon1.png" title = "Declarative" subtitle = "React makes it painless to create interactive UIs."/>
        <Bottom picture = "images/icon2.png" title = "Components" subtitle = "Build encapsulated components that manage their state."/>
        <Bottom picture = "images/icon3.png" title = "Single-Way" subtitle = "A set of inmutable values are passed to the components."/>
        <Bottom picture = "images/icon4.png" title = "JSX" subtitle = "Statically-typed, designed to run on modern browsers."/>
      </div>
    </div>
  );
}
export default App;
