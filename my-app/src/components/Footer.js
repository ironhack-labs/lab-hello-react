// Import image from images folder 
import Icon1 from '../images/icon1.png';
import Icon2 from '../images/icon2.png';
import Icon3 from '../images/icon3.png';
import Icon4 from '../images/icon4.png';

// Import Content 
import FooterBox from './Footer-Box';


function Footer(){
    return(
        <footer>
            <FooterBox boxClass='box box1' image={Icon1} title="Declarative" content="React makes it painless to create interactive UIs." />
            <FooterBox boxClass='box box1' image={Icon2} title="Components" content="Build encapsulated components that manage their state." />
            <FooterBox boxClass='box box1' image={Icon3} title="Single-Way" content="A set of immutable values are passed to the component's." />
            <FooterBox boxClass='box box1' image={Icon4} title="JSX" content="Statically-typed, designed to run on modern browsers." />
        </footer>
    );
}

export default Footer;