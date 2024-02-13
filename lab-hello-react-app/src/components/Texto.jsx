const butonStr = {

  background: "white",
  color: "black",
  border: "none",
  borderRadius: "4px",
  padding: "20px",
  fontSize: "18px",
  fontWeight: "500",
  marginTop: "20px",
}

function Texto(){
    return(
    <section className="titulo">
      <h1 id = "main-title">Say hello to ReactJs</h1>
      <p id = "descripcion" >You will learn how to use the most popular frontend library, and become a super Ninja developer.</p> 
       <button style={butonStr}>Awesome!</button>
     </section> 
    )
}

export default Texto