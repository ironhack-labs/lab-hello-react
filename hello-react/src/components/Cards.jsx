function Cards() {
    return (
        <div className="flex justify-around mt-40 mb-10 mr-auto ml-24 font-[Poppins] text-gray-700">
            <div className="p-4 text-start w-72 h-auto">
                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
                        class="max-w-xs"
                        alt="Declarative icon" />
                    <div
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-[180px] overflow-hidden bg-blue-300 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60 rounded-2xl"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Declarative</h3>
                <p className="w-3/4">React makes it painless to create interactive UIs</p>
            </div>
            <div className="p-4 text-start w-72 h-auto">
                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
                        class="max-w-xs"
                        alt="Componenets icon" />
                    <div
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-[190px] overflow-hidden bg-blue-300 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60 rounded-2xl"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Components</h3>
                <p className="w-3/4">Build encapsulated componenets that manage their state</p>
            </div>
            <div className="p-4 text-start w-72 h-auto">
                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
                        class="max-w-xs"
                        alt="SingleWay icon" />
                    <div
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-[180px] overflow-hidden bg-blue-300 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60 rounded-2xl"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Single-Way</h3>
                <p className="w-3/4">A set of immutable values are passed to the component's</p>
            </div>
            <div className="p-4 text-start w-72 h-auto">
                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
                        class="max-w-xs"
                        alt="JSX icon" />
                    <div
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-[180px] overflow-hidden bg-blue-300 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60 rounded-2xl"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">JSX</h3>
                <p className="w-3/4">Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>

    );
}

export default Cards;