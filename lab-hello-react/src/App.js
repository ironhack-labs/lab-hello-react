import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Button from "./components/Button";
import Feats from "./components/Feats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bg">
        <Header />
        <Button />
      </div>
      <Feats />
    </div>
  );
}
export default App;
