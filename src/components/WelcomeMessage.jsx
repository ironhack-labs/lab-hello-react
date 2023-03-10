import '../App.css'
import ironhackLogo from '../images/ironhack-logo-xs.png'
import menuTop from '../images/menu-top-xs.png'

function WelcomeMessage() {
  return (
    <div className='App-header mt-3 mb-5 container'>
      <div className='mt-3 mb-5 mx-5 d-flex justify-content-between'>
        <img src={ironhackLogo} className="h-25" alt=''/>
        <img src={menuTop} className="h-25" alt=''/>
      </div>
      <div className="row col-md-6 ms-5 mt-5">
        <h1 className=""> Say hello to ReactJs</h1>
        <p className=""> You will learn how to use the most popular frontend library and become a super Ninja developer.</p>
        <a href="" className="btn btn-primary col-md-3 mt-4">Awesome!</a>
      </div>
    </div>
  )
}

export default WelcomeMessage