import React, {Fragment} from "react"
import { Header } from './header';
import icono1 from "../Img/icon1.png"
import icono2 from "../Img/icon2.png"
import icono3 from "../Img/icon3.png"
import icono4 from "../Img/icon4.png"


export const Inicio = () => {
  return (
      <Fragment>
          <Header/>
          <section className="section1">
              <h1>Say Hello to <br></br> ReactJS</h1>
              <p>You will learn how to use <br></br> the most popular frontend library,
              <br></br> and become a super Ninja developer.</p>
              <a href="#"> Awesome!</a>
          </section>
          <section className="section2">
              <div className="divSection2">
                  <div className="column">
                      <img src={icono1} alt="icono"/>
                      <h1>Declarative</h1>
                      <p>React makes it <br></br>painless to create <br></br> interactive UIs</p>
                  </div>
                  <div className="column">
                      <img src={icono2} alt="icono"/>
                      <h1>Components</h1>
                      <p>Build encapsulated <br></br> components that <br></br> manage their state</p>
                  </div>
                  <div className="column">
                      <img src={icono3} alt="icono"/>
                      <h1>Single way</h1>
                      <p>A set of immutable <br></br> values are passed to <br></br> the components</p>
                  </div>
                  <div className="column">
                      <img src={icono4} alt="icono"/>
                      <h1>JSX</h1>
                      <p>Statically-typed, <br></br> designed to run on <br></br> modern browsers.</p>
                  </div>
              </div>
          </section>
      </Fragment>
  );
}


