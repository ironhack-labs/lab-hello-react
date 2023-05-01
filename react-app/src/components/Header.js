import Navbar from "./Navbar"

function Header(){
  return(
    <header className="Header">
      <Navbar />
      <h1>Say hello to <br /> ReactJS</h1>
      <p>You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja developer.</p>
      <button>Awesome!</button>
    </header>
  )
}
export default Header