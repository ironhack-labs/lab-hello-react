import React from "react";
import imgLogo from "../assets/ironhack-logo-xs.png";
import img3 from "../assets/menu-top-xs.png";
import "../App.css"

const NavigationBar = () => {
  return (

<>
    <div className="m-4 p-5" className="bg-color-custom" >
    <div> <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between">
            <div>
              <img src={imgLogo} className="p-5"/>
            </div>
            <div>
              <img src={img3} className="p-5"/>
            </div>
          </div>
        </div>
      </div></div>
     
<div className="m-4 p-5 d-flex justify-content-start">
  <div className="row">
    <div className="col-3">
    <h1 className="display-6" className="text-color"><strong>Say Hello to ReactJS</strong></h1>      <div className="row">
        <h4 className="text-color">
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer
        </h4>
      </div>
      <button className="btn btn-light mt-4">
        <strong>AWESOME!</strong>
      </button>
    </div>
  </div>
</div>
</div>
</>
      
    
  );
};

export default NavigationBar;
