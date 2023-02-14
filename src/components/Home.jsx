import { Feature } from "./Feature";

import logo from "../images/ironhack-logo.png";
import lines from "../images/two-lines.png";
import declarativeIcon from "../images/declarative-icon.png";
import componentsIcon from "../images/components-icon.png";
import singleWayIcon from "../images/single-way-icon.png";
import jsxIcon from "../images/jsx-icon.png";

import "./Home.css";

export function Home() {
  const features = [
    {
      src: declarativeIcon,
      title: "Declarative",
      description: "React makes it painless to create interactive UIs",
    },
    {
      src: componentsIcon,
      title: "Components",
      description: "Build encapsulated components that manage their state",
    },
    {
      src: singleWayIcon,
      title: "Single-Way",
      description: "A set of immutable values are passed to the components",
    },
    {
      src: jsxIcon,
      title: "JSX",
      description: "Statically typed, designed to run on modern browsers",
    },
  ];

  return (
    <main className="home">
      <header className="home__header">
        <section className="home__header__iconContainer">
          <img
            src={logo}
            alt="The Ironhack logo"
            className="home__header__iconContainer__ironhackIcon"
          />
          <img
            src={lines}
            alt="Stylish lines"
            className="home__header__iconContainer__linesIcon"
          />
        </section>
        <section className="home__header__content">
          <h2 className="home__header__content__title">Say hello to ReactJS</h2>
          <p className="home__header__content__copy">
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <button className="home__header__content__button">Awesome!</button>
        </section>
      </header>

      <section className="featuresContainer">
        {features.map((feature, index) => {
          return (
            <Feature
              key={index}
              src={feature.src}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </section>
    </main>
  );
}
