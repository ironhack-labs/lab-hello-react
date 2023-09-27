import IconLogo from "../images/logoicon.png"
import IconBurguer from "../images/burguericon.png"

function Body() {
  return (
    <>
    <div className="container bg-dark col-lg-8">
      <div className="card-sm p-5">
          <div className="row">
            <div className="col-lg-12">
              <img className="float-start p-2" src={IconLogo} style={{ width: "60px", height: "auto" }} />
              <img className="float-end p-2" src={IconBurguer} style={{ width: "60px", height: "auto" }} />
            </div>
          </div>
        <div className="card-body">
          <ul className="list-unstyled text-light mt-5">
            <li><h1>Say hello to</h1></li>
            <li><h1>ReactsJS</h1></li>
            <li>You will learn how to use</li>
            <li>the most popular frontend library,</li>
            <li>and become a super Ninja developer.</li>
          </ul>
          <button className="btn btn-light mt-4 p-3" type="submit">Awesome!</button>
        </div>
      </div>
    </div>  
   </>
  )
}
export default Body;