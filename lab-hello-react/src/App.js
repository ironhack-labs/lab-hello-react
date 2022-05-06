// src/App.js
import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Nav from './components/Nav';

function App() {
    return (
        <div className='App'>
            <Nav />
            <Section1 />
            <Section2 />
        </div>
    );
}
export default App;
