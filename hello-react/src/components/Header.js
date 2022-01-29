import Nav from "./Nav";
import Button from "./Button";

function Header() {
    return (
      <div className="App-header">
        <Nav />
        <section>
          <h1>Say hello to <br></br>ReactJS</h1>
          <p>
            You will learn how to use <br></br> the most popular front end
            libreary, <br></br> and become a super Ninja developer
          </p>
          <Button />
        </section>
      </div>
    );
}

export default Header;