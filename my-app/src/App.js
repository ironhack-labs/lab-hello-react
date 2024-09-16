import './App.css';
import Text from './components/Text.js';
import CardDeclarative from './components/CardDeclarative';
import CardCompontents from './components/Compontents';
import CardSingleWay from './components/SingleWay';
import CardJSX from './components/JSX';
import Button from './components/Button';
import Nav from './components/Nav';

// src/App.js


function App() {
  return (
    <div className="App">
      <Nav />
      <Text />
      <Button />
    <div id="flexCards">
      <CardDeclarative />
      <CardCompontents />
      <CardSingleWay />
      <CardJSX />

    </div>
    </div>
  );
}

export default App;
