import './App.css';

import Layout from './components/Layout';
import Card from './components/Card';
import img1 from './images/icon1.png';
import img2 from './images/icon2.png';
import img3 from './images/icon3.png';
import img4 from './images/icon4.png';

const card1= {
  img:img1,
  title:"Declarative",
  description:"description1"
}
const card2= {
  img:img2,
  title:"Components",
  description:"description2"
}
const card3= {
  img:img3,
  title:"Single-Way",
  description:"description3"
}
const card4= {
  img:img4,
  title:"JSX",
  description:"description4"
}

function App() {
  return (
    <div className="App">
        <Layout> 
          <div className="container section-cards">
            <div className="row">
              <Card card={card1}/>
              <Card card={card2}/>
              <Card card={card3}/>
              <Card card={card4}/>
            </div>
          </div>
        </Layout>
    </div>
  );
}

export default App;
