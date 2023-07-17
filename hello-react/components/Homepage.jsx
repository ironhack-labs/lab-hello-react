import React from "react";
import logoImg from "/src/assets/images/ironhack-logo-xs.png";
import menuImg from "/src/assets/images/menu-top-xs.png";
import icon1Img from "/src/assets/images/icon1.png";
import icon2Img from "/src/assets/images/icon2.png";
import icon3Img from "/src/assets/images/icon3.png";
import icon4Img from "/src/assets/images/icon4.png";

export default function Homepage() {
  return (
    <>
      <section className="header">
        <nav>
          <img src={logoImg} alt="Logo"></img>
          <img src={menuImg} alt="Menu"></img>
        </nav>
        <h1>
          Say Hello to <br />
          ReactJS
        </h1>
        <p className="subText">
          You will learn how to use <br />
          the most popular frontend library, <br />
          and become a super Ninja developer.
        </p>
        <br />
        <button className="homePageButton">Awesome!</button>
      </section>

      <section className="footer">
        <div className="box">
          <img src={icon1Img} alt="image of serive" />
          <h3>Declartive</h3>
          <p>
            React makes it <br />
            painless to create <br />
            interactive UIs.
          </p>
        </div>
        <div className="box">
          <img src={icon2Img} alt="" />
          <h3>Components</h3>
          <p>
            Build encapsulated <br />
            components that <br />
            manage their state.
          </p>
        </div>
        <div className="box">
          <img src={icon3Img} alt="" />
          <h3>Single-way</h3>
          <p>
            A set of immutable <br />
            values are passed to <br />
            the compponent's.
          </p>
        </div>
        <div className="box">
          <img src={icon4Img} alt="" />
          <h3>JSX</h3>
          <p>
            Statically-typed, <br />
            designes to run on <br />
            modern browsers.
          </p>
        </div>
      </section>
    </>
  );
}
