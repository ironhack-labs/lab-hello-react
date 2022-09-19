import Navbar from "../Navbar/Navbar"
import Button from "../Button/Button"


function Header(props) {
  return (
    <div className={"header"}>
      <Navbar />
      <div className="textHolder">
        <h2>Say Hello to ReactJs</h2>
        <h3>You will learn how to use the most popular frontend library, and become a super Ninja developer</h3>
      </div>
      <Button />
    </div>
  )
}

export default Header