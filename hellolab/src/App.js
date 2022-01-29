import './App.css';
import Box from './components/Box';
import Main from './components/Main';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';


function App() {

  const box1 = {
    image: icon1,
    title: "Declarative",
    content: "React makes it painless to create interactive UIs."
  };

  const box2 = {
    image: icon2,
    title: "Components",
    content: "Build encapsulated components that manage their own state"
  };

  const box3 = {
    image: icon3,
    title: "Single-Way",
    content: "A set of inmutable values are passed to the component's."
  };

  const box4 = {
    image: icon4,
    title: "JSX",
    content: "Statically-typed, designed to run on modern browsers."
  };

  return (
    <div className="App">
      <div className="header">
      <Main />
      </div>
      <div className="boxes">
        <Box {...box1} />
        <Box {...box2} />
        <Box {...box3} />
        <Box {...box4} />
      </div>
    </div>
  );
}

export default App;
