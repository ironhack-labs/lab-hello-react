import "@effective/css-reset"
import './App.css';

import logoSrc from "./assets/ironhack-logo-xs.png"
import menuImgSrc from "./assets/menu-top-xs.png"
import service1ImgUrl from "./assets/icon1.png"
import service2ImgUrl from "./assets/icon2.png"
import service3ImgUrl from "./assets/icon3.png"
import service4ImgUrl from "./assets/icon4.png"

import Header from "./header";
import Hero from "./hero";
import Services from "./services";

function App() {
  return (
    <div className="App">
      <Header
        logoUrl={logoSrc}
        logoAlt="Iron Hack"
        menuImgUrl={menuImgSrc}
      />

      <Hero
        claim="Say hello to ReactJS"
        description="You will learn how to use the most popular library, and become super Ninja developer."
        ctaText="Awesome!"
        ctaUrl="https://www.google.com/?hl=es"
      /> 

      <main className='content'>
        <ul className='services'>
          <Services
            img={service1ImgUrl}
            title="Declarative"
            description="React makes it painless to create interactive UIs."
          />
          <Services
            img={service2ImgUrl}
            title="Components"
            description="Build encapsulated components that manage their state."
          />
          <Services
            img={service3ImgUrl}
            title="Single-Way"
            description="A set of inmmutable values are passed to the component's"
          />
          <Services
            img={service4ImgUrl}
            title="JSX"
            description="Statically-typed, designed to run on modern browsers."
          />
        </ul>
      </main>

    </div>
  );
}

export default App;