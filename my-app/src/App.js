// src/App.js
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <section className="App-header" >
    <Navbar />
        <Header />

    </section>
       
        <Footer />

    </div>
  );
}
export default App;
