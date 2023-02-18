// import logo from './logo.svg';

import "./App.css";
import { Header } from "./components/Header";
import { Content } from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header>
        <button className="awesome-btn">Awesome!</button>
      </Header>
      <Content />
    </div>
  );
}
export default App;
