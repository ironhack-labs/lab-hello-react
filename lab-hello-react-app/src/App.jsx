import "./App.css";
import Header from "./components/Header";
import Texto from "./components/Texto";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="bodyTop">
        <Header />
        <Texto />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;