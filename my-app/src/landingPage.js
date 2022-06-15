import inronhackLogo from './images/ironhack-logo-xs.png'
import inronhackMenu from './images/menu-top-xs.png'

function LandingPage(){
  return (
    <div className="LandingPage">

        <img className='Iron-Logo' src={inronhackLogo} alt="Logo"/>
        <img className='Iron-Menu' src={inronhackMenu} alt="Menu"/>

        <h1 className='Text1'>Say Hello to ReactJS</h1>
        <br/>
        <h3 className='Text2'> You will to use the most popular frontend library, and become a super Ninja developer</h3>
 
    </div>
  );
}

export default LandingPage;