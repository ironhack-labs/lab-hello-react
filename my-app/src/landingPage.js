import inronhackLogo from './images/ironhack-logo-xs.png'
import inronhackMenu from './images/menu-top-xs.png'

function LandingPage(){
  return (
    <div className="LandingPage">

        <div className='Container1'>
            <img className='Iron-Logo' src={inronhackLogo} alt="Logo"/>
            <img className='Iron-Menu' src={inronhackMenu} alt="Menu"/>
        </div>
        
        <div className='Container2'>
            <h1 className='Text1'>Say Hello to <br/> ReactJS</h1>
            <p/>
            <h3 className='Text2'> You will to use <br/> the most popular frontend library, <br/>and become a super Ninja developer</h3>
        </div>

        <div className='Container3'>
            <button className='Button1'> Awesome! </button>
        </div>
    </div>
  );
}

export default LandingPage;