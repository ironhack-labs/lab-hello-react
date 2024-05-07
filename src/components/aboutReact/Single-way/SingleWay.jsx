import React from "react";
import "../commonStyles.css"; // common styles for each section from about React

function SingleWay() {
  return (
    <>
      <section className="commonContainer">
        <div className="img">
        <img src="/src/assets/icon3.png" alt="Single-Way" />

        </div>
        <div className="title">SingleWay</div>
        <div className="p">
          A set of immutable values are passed to the component's.
        </div>
      </section>
    </>
  );
}

export default SingleWay; // export to use
