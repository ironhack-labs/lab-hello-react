import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";

import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

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
