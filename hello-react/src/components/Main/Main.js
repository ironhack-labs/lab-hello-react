import Card from '../UI/Card/Card';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';

import styles from './Main.module.css';

const Main = (props) => {
    return (
        <section className={styles.main}>
            <Card
                imgSrc={icon1}
                alt={'declarative logo'}
                title={'Declarative'}
                content={'React makes it painless to create interactive UIs.'}
            />
            <Card
                imgSrc={icon2}
                alt={'components logo'}
                title={'Components'}
                content={
                    'Build encapsulated components that manage their state'
                }
            />
            <Card
                imgSrc={icon3}
                alt={'single way logo'}
                title={'Single-Way'}
                content={'A set of immutable values are passed to components'}
            />
            <Card
                imgSrc={icon4}
                alt={'jsx logo'}
                title={'JSX'}
                content={
                    'Statically-typed, designed to run on modern browsers.'
                }
            />
        </section>
    );
};

export default Main;
