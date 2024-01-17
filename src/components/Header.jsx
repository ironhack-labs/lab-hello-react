import "./Header.css";

function Header() {
  return (
    <div id="header">
      <div id="images">
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
          alt="ironhackLogo"
        />
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
          alt="bars"
          id="barsIcon"
        />
      </div>
      <div id="text">
        <h1 id="textH1">Say hello to ReactJS</h1>
        <p id="textP">
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
    </div>
  );
}

export default Header;
