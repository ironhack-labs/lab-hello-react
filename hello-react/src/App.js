import './App.css';
import { Header } from './components/header.js';
import { Hero } from './components/hero.js';
import { Service } from './components/service.js';
import { data } from './components/data.js';
import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';

function App() {
  return (
    <div className='App'>
      <Header logoImg={logo} menuImg={menu} />
      <section className='p-5 mb-4 bg-color-dark'>
        <div className='container'>
          <Hero />
        </div>
      </section>
      <section className='section-services p-5 mb-4'>
        <div className='container'>
          <div className='row'>
            {data.map(service => (
              <div className='col-6 col-md-3'>
                <Service
                  id={service.id}
                  img={service.img}
                  title={service.title}
                  text={service.text}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
