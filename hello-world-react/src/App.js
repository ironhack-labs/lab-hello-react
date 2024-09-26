import './App.css';
import Navbar from'./components/Navbar';
import Button from'./components/Button';
import SectionOne from './components/SectionOne';
import Gallery from './components/Gallery';
import GalleryText from './components/GalleryText';

function App() {
  return (
    <div className="App">
      <section id="first-part">
      <Navbar /> 
      <SectionOne />
      <Button />
      </section>

      <Gallery />
      <GalleryText />
    </div>
  );
}
export default App;