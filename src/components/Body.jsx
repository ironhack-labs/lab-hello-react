import "../App.css";
import Navbar from "./Navbar";

function Body() {
  return (
    <div className="App-header mt-3 mb-5 container">
      <Navbar />
      <div className="row col-md-6 ms-5 mt-5">
        <h1 className="h1"> Say hello to ReactJs</h1>
        <p className="h6">
          {" "}
          You will learn how to use the most popular frontend library and become
          a super Ninja developer.
        </p>
        <a href="" className="btn btn-primary col-md-3 mt-4">
          Awesome!
        </a>
      </div>
    </div>
  );
}

export default Body;
