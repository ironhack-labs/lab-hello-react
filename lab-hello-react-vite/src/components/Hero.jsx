import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <h1>Say hello to ReactJS</h1>
      <h2>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </h2>
      <button>Awsome!</button>
    </div>
  );
};

export default Hero;
