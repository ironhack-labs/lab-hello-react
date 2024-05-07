import React from "react";
import "../commonStyles.css"; // common styles for each section from about React

function JSX() {
  return (
    <>
      <section className="commonContainer">
        <div className="img">
          <img src="/src/assets/icon4.png" alt="JSX" />
        </div>
        <div className="title">JSX</div>
        <div className="p">
          Statically-typed, designed to run on modern browsers.
        </div>
      </section>
    </>
  );
}

export default JSX; // export to use
