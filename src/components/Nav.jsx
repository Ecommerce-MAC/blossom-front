 import { useState } from "react";
 import {Link} from "react-router-dom";


export default function Nav() {
    const [navbar, setNavbar] = useState(false);
    

    return (
        <nav className="w-full bg-orange ">
            <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex  ">
                <div>
                    <div className="flex justify-between py-3 md:py-5 md:block">

                         <div className="md:hidden ">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div> 
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center  pt-2 pb-2 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >

                        <div className=" space-y-8 md:flex md:space-x-6 md:space-y-0 text-white gap-20 text-xl font-light">
                            <Link className="hover:transform hover:scale-125 transition-all" to= "/"> Home </Link>
                            <Link className="hover:transform hover:scale-125 transition-all" to= "/ProductList/Cosmetics"> Cosmetics </Link>
                            <Link className="hover:transform hover:scale-125 transition-all" to= "/ProductList/Soap"> Soaps </Link>
                            <Link className="hover:transform hover:scale-125 transition-all" to= "/ProductList/Aromatherapy"> Aromatherapy </Link> 
                            <Link className="hover:transform hover:scale-125 transition-all"to= "/ProductList/Hair"> Hair </Link> 
                           
                        </div> 

                    </div>
                </div>

            </div>
        </nav>
    );
};
