
import Text from '../text/Text';
import Boton from '../boton/Boton';
import Nav from '../nav/Nav';
import './landing.css';
import Footer from '../Footer';


function Landing() {
  return (
    <>
        <div className='landing'>
            <Nav />
            <Text />
            <Boton />
        </div>
        <div className='down'>
            <Footer />
        </div>
    </>
  )
}

export default Landing
