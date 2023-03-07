import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar />
      <div className="header">
        <div className="title">
          <h1>Say hello to ReactJS</h1>
          <p>
            You wil learn how to use the most popular frontend library, and
            become a super Ninja developer
          </p>
        </div>
        <div className="btn-header">
          <button>Awesome!</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
