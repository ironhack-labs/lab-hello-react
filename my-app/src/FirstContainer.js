import logo from "./images/logo.png";
import menuTop from "./images/menuTop.png";

const FirstContainer = () => {
  return (
    <>
      <div className="container">
        <div className="nav">
          <img src={logo} alt="logo" />
          <img src={menuTop} alt="logo" />
        </div>
        <div className="textDiv">
          <h1>
            Say Hello to <br /> ReactJS
          </h1>
          <p className="containerText">
            You will learn how to use <br /> the most popular frontend library,
            <br /> and become a super Ninja developer
          </p>
          <button>Awsome!</button>
        </div>
      </div>
    </>
  );
};

export default FirstContainer;
