import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <main className="hero">
      <div className="hero-container">
        <h1>
          Say hello to
          <br />
          ReactJs
        </h1>
        <p>You will learn how to use</p>
        <p>the most popular fronted library,</p>
        <p>and become a super Ninja developer.</p>
        <div className="hero-btn">
          <Button text="Awesome!" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
