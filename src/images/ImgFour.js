import React from 'react';
import icon4 from './icon4.png';
function ImgFour() {
    return (
      React.createElement(
        "div",
        {
          className: "galinto"
        },

        React.createElement("img", {
          src: icon4,
          alt: "icon4"
        }),
        React.createElement("h2", null, "JSX"),
        React.createElement("p", null, "Statically-typed designed to run on modern broweres."),

      ))};
  
  export default ImgFour;
  