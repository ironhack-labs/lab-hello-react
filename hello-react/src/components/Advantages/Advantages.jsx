import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'


const Advantages = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <img src={icon1} alt="icon 1" />
                        <h2 className="text-2xl font-medium mt-4">Declarative</h2>
                        <p className="text-sm text-gray-500 mt-2">React makes it painless to create interactive UIs</p>
                    </div>
                    <div className="col-span-1">
                        <img src={icon2} alt="icon 2" />
                        <h2 className="text-2xl font-medium mt-4">Components</h2>
                        <p className="text-sm text-gray-500 mt-2">Build encapsulated componets that manage their state</p>
                    </div>
                    <div className="col-span-1">
                        <img src= {icon3} alt="icon 3" />
                        <h2 className="text-2xl font-medium mt-4">Single-Way</h2>
                        <p className="text-sm text-gray-500 mt-2">A set of immutable values are passed to the components</p>
                    </div>
                    <div className="col-span-1">
                        <img src={icon4} alt="icon 4" />
                        <h2 className="text-2xl font-medium mt-4">JSX</h2>
                        <p className="text-sm text-gray-500 mt-2">Statically-typed, designed to run on modern browsers</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Advantages;
