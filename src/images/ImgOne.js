import React from 'react';
import icon1 from './icon1.png';
function ImgOne() {
    return (
      React.createElement(
        "div",
        {
          className: "galinto"
        },

        React.createElement("img", {
          src: icon1,
          alt: "icon"
        }),
        React.createElement("h2", null, "Declrative"),
        React.createElement("p", null, "React make it painless to create interactive UIs."),

      ))};
  
  export default ImgOne;
