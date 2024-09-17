import computer from '../images/computer.png';
import computer2 from '../images/computer2.png';
import desktop from '../images/desktop.png';
import wrench from '../images/wrench.png';
// import sidebar from '../images/sidebar.png';

const Section1 = () => {
    return (
        <div>
            <img src={computer} alt='logo' width='100' height='100' />
            <img src={computer2} alt='logo' width='100' height='100' />
            <img src={desktop} alt='logo' width='100' height='100' />
            <img src={wrench} alt='logo' width='100' height='100' />
            {/* <img src={sidebar} alt='logo' width='100' height='100' /> */}
        </div>
    );
};

export default Section1;
