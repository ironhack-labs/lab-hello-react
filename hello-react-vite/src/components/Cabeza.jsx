import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
const sectionStyle = {
  backgroundColor: "grey",
  color: "white",
  display: "flex",
  flexDirection:"column",
  textAlign: "left",
  height: "500px",
  padding: "80px"
};
const sectionInicio = {
  display: "flex",
  justifyContent:"space-between",
};
const imageStyle = {
height: "50px"
}
const textStyle = {
fontSize: "100px"
}
const bottonStyle = { 
width: "150px",
height: "80px",
backgroundColor: "white",
color: "black",
fontSize:"large",
borderRadius: "10px",

  
}
function Header() {
  return (
    <section style={sectionStyle}>
      <div style={sectionInicio}>
        <img style ={imageStyle} src={img1} alt="" />
        <img style ={imageStyle} src={img2} alt="" />
      </div>
      <div>
        <h1 style = {textStyle}>Say hello to ReactsJS</h1>
        <h3>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer
        </h3>
        <button style ={bottonStyle}>Awesome!</button>
      </div>
    </section>
  );
}
export default Header;
