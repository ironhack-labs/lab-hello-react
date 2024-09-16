import ButtonMain from "./ButtonMain"
import MainBody from "./MainBody"
import MainHeading from "./MainHeading"
const styleMain = {

  textAlign: "left",
  backgroundColor : "#1F2535",
  width: "100vw",
  height: "80vh",
  color: "white",
  display: "flex",
  alignItems: "center"
  
}

const styleContainerMain = {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  padding : "40px"
}

function MainSection(){
  return (

    <div style={styleMain}>
      <div style={styleContainerMain}>
      <MainHeading />
    <MainBody />
    <ButtonMain />
      </div>
   
    </div>
    
   
  )
}

export default MainSection