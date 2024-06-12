import jumboImageOne from '../images/ironhack-logo-xs.png'
import jumboImageTwo from '../images/menu-top-xs.png'

function Jumbotron(){
    return (
        <div className="jumbotron p-5 w-75">
        <div className="jumbo-top d-flex align-items-center justify-content-between pb-5">
          <img src={jumboImageOne} className="float-left" alt="Ironhack MiniLogo"/>
          <img src={jumboImageTwo} className="float-right" alt="Mini Menu"/>
        </div>
        <div className="jumboBody w-50 pt-4">
          <h1 className="display-4 font-weight-bold">Say hello to ReactJS</h1>
          <p className="lead">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <p className="lead">
            <a className="btn btn-light btn-lg mt-4" href="http://ironhack.com/" role="button">Awesome!</a>
          </p>
        </div>
      </div>  
  )
}

export default Jumbotron;