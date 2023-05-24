import "./App.css";
import MyCarousel from "./components/Carrousel";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Intro />
      <Footer />
      <MyCarousel />
    </div>
  );
}
export default App;
