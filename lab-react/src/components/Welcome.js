import "./Welcome.css";
import Navbar from "./Navbar";
import Button from "./Button";

const Welcome = () => {
  return (
    <div className="Welcome">
      <Navbar />
      <div className="welcome-content">
        <div>
          <h1>Say hello to ReactJs</h1>
          <p>
            You will learn how to the most popiular frontend library, and become
            a super Ninja developer.
          </p>
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
