import Feature from '../feature/Feature';
import './FeatureList.css';
import imgOne from '../../assets/icon1.png';
import imgTwo from '../../assets/icon2.png';
import imgTrhee from '../../assets/icon3.png';
import imgFour from '../../assets/icon4.png';


function FeatureList() {
    const items = [
        {title: 'Declarative',
        text: 'React make it painless to create interactive ULs',
        img : imgOne,
        },
        {title: 'Components',
        text: 'Build encapsulated components that manager their state.',
        img : imgTwo,
        },
        {title: 'Single-Way',
        text: 'A set of immutable values are passed to the component.',
        img : imgTrhee, 
        },
        {title: 'Jsx',
        text: 'Statically-typed, designed to run on modern browsers.',
        img : imgFour,
        },

    ]
    
    return (
        <div className="list">
      {items.map((item) => (
        <Feature title={item.title} text={item.text} img={item.img} key={item.text} />
      ))}
    </div>
  );
        

}

export default FeatureList;


