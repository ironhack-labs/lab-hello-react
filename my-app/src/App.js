// src/App.js
import './App.css';
import Navbar from "./Navbar.js"
import Banner from "./Banner.js"
import Content from "./Content.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Content />
    </div>
  );
}
export default App;