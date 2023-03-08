function Box() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 mx-5 h-[800px] mt-5">
            <nav className="h-24 flex items-center justify-between px-14">
                <img className="h-12 w-auto animate-bounce" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="Ironhack Logo" />
                <div class="w-10 h-10 border-2 border-white rounded-full flex justify-center items-center hover:border-cyan-700 hover:bg-white hover:bg-opacity-30 cursor-pointer hover:scale-125 duration-500 hover:shadow-md">
                    <img className="h-2 w-auto" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="Menu Icon" />
                </div>
            </nav>
            <div className="w-2/5 h-auto ml-14 mt-24 text-white text-start font-[Montserrat]">
                <h1 className="font-extrabold text-8xl mb-4">Say hello to ReactJS</h1>
                <p className="font-light text-4xl">You will learn how to use<br />the most popular frontend library,<br />and become a super Ninja developer</p>
            </div>

            <div className="w-2/5 ml-14 mt-14 flex">
                <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                    <div className="absolute inset-0 w-0 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white">Awesome!</span>
                </button>
            </div>

        </div>
    );
}

export default Box;