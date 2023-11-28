import laptop from "../assets/Icon2.png"

function IconTwo() {
  return (
    <div className="grid grid-cols-1 gap-6   lg:grid-cols-4 ">
            <div className="  h-full relative shadow-2xl shadow-gray-900 overflow-hidden group ">
                <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-gray-900 transition-all ease-in-out duration-500  ">
                    <div className="w-full h-full   p-5   relative">
                        <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                            <h2 className="text-2xl font-bold  text-white mb-0 pb-1">Components</h2>
                                <p className="text-lg font-light text-white">Build encapsulated components that manager their state.</p>
                        </div>
                    </div>
                </div>
                    <img
                      src={laptop}
                      alt="laptop"
                      />
            </div>
    </div>
  )
}

export default IconTwo;
