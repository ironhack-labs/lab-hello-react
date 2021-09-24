import Navbar from './Navbar'
import Footer from './Footer'

function Layout(props) {
    return (
        <>
            <Navbar/>

            {props.children}

            <Footer/>
        </>    
    );
  }
  
  export default Layout;
  