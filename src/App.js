import './App.css';
import Components from './components/Components';
import Declarative from './components/Declarative';
import Jsx from './components/Jsx';
import Main from './components/Main';
import Nav from './components/Nav';
import SingleWay from './components/Singleway';



function App() {
  return (
    <div className="App" style={{display: "flex", flexDirection: "column", alignItems:"center", marginTop: "50px"}}>
    <section style={{backgroundColor: "black", color: "white", width: "50%", height:"50%", padding:"2vh"}}>
       <Nav />
      <Main />
    </section>
    <section style={{height:"50%", display:"flex", marginTop: "100px"}}>
    <Declarative />
    <Components />
    <SingleWay />
    <Jsx />
    </section>
    </div>
  );
}
export default App;