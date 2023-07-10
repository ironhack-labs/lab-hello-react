import React from "react";
import img from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/icon3.png";
import img4 from "../assets/icon4.png";

const FooterBar = () => {
  return (
    <div>
      <div className="row mt-6">
        
        
        
        
          <div className="col-3">
            <img src={img} className="img-fluid w-50 h-50"/>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
      


        <div className="col-3">
          <img src={img2} className="img-fluid w-50 h-50"></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="col-3">
          <img src={img3} className="img-fluid w-50 h-50"></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="col-3">
          <img src={img4} className="img-fluid w-50 h-50"></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
