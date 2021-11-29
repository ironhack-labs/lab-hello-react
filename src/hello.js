import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";

const Hello = () => {
  return (
    <div className="hello-txt">
      <nav>
        <img src={logo} alt="" />
        <img src={menu} alt="" />
      </nav>
      <div className="txt-and-btn">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja Developer.
        </p>
        <button> Awesome! </button>
      </div>
    </div>
  );
};

export default Hello;
