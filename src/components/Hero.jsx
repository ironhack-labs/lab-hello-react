import { Button } from "./Button";
import { Navbar } from "./Navbar";

export const Hero = (props) => {
  return (
    <div className="hero">
      <Navbar />
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and become a super Ninja
        developer!
      </p>
      <Button text="Awesome!" link="#" />
    </div>
  );
};
