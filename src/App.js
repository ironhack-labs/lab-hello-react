import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container-app h-50">
        <div className="row justify-content-between first-element">
          <div className="col-1">
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="Iron Hack logo"/>
          </div>
          <div className="col-1 text-end">
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="Menu"/>
          </div>
        </div>
        <div className="row second-element">
          <div className="col-6 text-white">
            <h1 className="fw-bold second-element-title__fs">Say hello to ReactJS</h1>
            <p className="second-element-description__fs">You will learn how to use <br />the most popular frontend library, <br />and become a super Ninja developer</p>
          </div>
        </div>
        <div className="row third-element">
          <div className="col-3">
            <button className="btn btn-light fw-bold pe-4 ps-4 pt-3 pb-3">Awesome!</button>
          </div>
        </div>
      </div>
      <div className="container-tools h-50">
        <div className="row justify-content-center">
          <div className="col-3 text-start">
            <img className="w-50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="Declarative"/>
            <h3 className="fs-bold ms-2">Declarative</h3>
            <p className="text-black-50 ms-2 tools-element-description">React makes it<br />painless to create<br />interactive UIs.</p>
          </div>
          <div className="col-3">
            <img className="w-50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="Components"/>
            <h3 className="fs-bold ms-2">Components</h3>
            <p className="text-black-50 ms-2 tools-element-description">Build encapsulated<br />components that<br />manage their state.</p>
          </div>
          <div className="col-3">
            <img className="w-50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="Single Way"/>
            <h3 className="fs-bold ms-2">Single-Way</h3>
            <p className="text-black-50 ms-2 tools-element-description">A set of immutable<br />values are passed to<br />the component's.</p>
          </div>
          <div className="col-3">
            <img className="w-50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="JSX"/>
            <h3 className="fs-bold ms-2">JSX</h3>
            <p className="text-black-50 ms-2 tools-element-description">Statically-typed,<br />designed to run on<br />modern browsers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
