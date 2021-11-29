import headerimg1 from "./images/ironlogo.png";
import headerimg2 from "./images/menuimage.png";

function MainContainer() {
  return (
    <div className="Main container">
      <div className="App-header">
        <div className="logosheader">
          <img className="logoIH" src={headerimg1} alt="headerimg1" srcset="" />
          <img className="Menu" src={headerimg2} alt="menuimg1" srcset="" />
        </div>
        <div className="textmenu">
          <p>
            <h1>
              Say hello to
              <p> ReactJS</p>
            </h1>
          </p>
          <p>You will learn how to use </p>
          <p> the most popular frontend library</p>
          <p> and become a super Ninja developer</p>
          <button className="button">Awesome!</button>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
