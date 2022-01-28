import "./Header.css";

function Header() {
  return (
    <div className="container">
      <h1>Say hello to ReactJS</h1>
      <div className="subcontainer">
        <p>
          You will learn how to use the most popular front end library, and
          become a super Ninja developer
        </p>
        <button>Awesome!</button>
      </div>
    </div>
  );
}

export default Header;