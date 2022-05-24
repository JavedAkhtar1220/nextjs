
const PropertyHero = (props) => {
    return (
        <>
<div className="flex items-center justify-center -mt-12 w-full py-8">
                {/* Card code block start */}
                <div className="bg-white dark:bg-gray-800 shadow rounded">
                    <div className="relative">
                        <img className="h-56 shadow rounded-t w-full object-cover object-center" src="../8600francis.jpg" alt />
                        <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
                            <img className="w-full h-full overflow-hidden object-cover rounded" src="./m_logo.jpg" alt />
                        </div>
                    </div>
                    <div className="px-5 xl:px-10 pb-10">
                        <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
                           
                        </div>
                        <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
                            <div className="xl:pr-16 w-full xl:w-2/3">
                                <p>Home/Properties/ForSale/Richmond</p>
                                <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row mt-10 items-center justify-between xl:justify-start">
                                    <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-600 dark:text-gray-100 font-medium tracking-normal">8600 Francis Rd, Richmond, BC </h2>
                                    
                                    <div className="flex w-1/3 justify-center text-sm bg-green-700 dark:bg-green-600 text-white px-4 py-2 font-normal rounded">For Sale</div>
                                </div>
                                <h1 className="mb-3 xl:mb-0 xl:mr-4 text-3xl font-extrabold text-gray-800 dark:text-gray-100 tracking-normal">Mason Estate</h1>
                    <p>
                      <div className="mt-6 flex items-center justify-start">
                        <div className="w-8 flex flex-col items-center">
                        <img className="h-8 rounded-full" src="../m_logo.jpg" />
                         </div>
                         <div className="pl-3 justify-center items-center text-sm font-semibold leading-normal text-gray-800">
                         Developer: Mavic Properties Ltd.
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="mt-6 flex items-center justify-start">
                        <div className="w-8 flex flex-col items-center">
                        <img className="h-8 rounded-full" src="../admiral.png" />
                         </div>
                         <div className="pl-3 justify-center items-center text-sm font-semibold leading-normal text-gray-800">
                         General Contractor: Admiral Operations Ltd.
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="mt-6 flex items-center justify-start">
                        <div className="w-8 flex flex-col items-center">
                        <img className="h-8 rounded-full" src="../eric.jpg" />
                         </div>
                         <div className="pl-3 justify-center items-center text-sm font-semibold leading-normal text-gray-800">
                         Architect: Eric Stine Architects Inc.
                        </div>
                      </div>
                    </p>
                            </div>
                            <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
                                <div className="mr-6 xl:mr-10">
                                    <h2 className="text-green-600 dark:text-green-600 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">$1.27M</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-md leading-5">Asking</p>
                                </div>
                                <div className="mr-6 xl:mr-10">
                                    <h2 className="text-gray-700 dark:text-gray-700 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">1-4</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-md leading-5">Bedrooms</p>
                                </div>
                                <div>
                                    <h2 className="text-red-400 dark:text-red-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">18</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-md leading-5">Units</p>
                                </div>
                            </div>
                            <div className="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
                                <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0">
                                <div className="flex items-center justify-center py-8 px-4">
                <div className="md:w-64 rounded shadow-lg p-5 bg-indigo-700">
                    <p className="text-2xl font-bold leading-none text-white pt-7">Download Brochure</p>
                    <p className="pt-4 text-sm leading-5 text-white">
                        <img className="img-responsive mb-4" src="../brochure.jpg" />
                    </p>
                    <a target="_blank" href="https://www.masonestates.ca/homes.html">
                    <div className="flex items-center w-full justify-end relative">
                    
                        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full opacity-50" />
                       
                        <div className="w-12 h-12 mr-2 flex items-center cursor-pointer justify-center bg-white rounded-full absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1={5} y1={12} x2={19} y2={12} />
                                <line x1={15} y1={16} x2={19} y2={12} />
                                <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                        </div>
                        
                    </div>
                    </a>
                </div>
            </div>
                                    
                            </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card code block end */}
        </div>
         </>
         );
     };
     export default PropertyHero;
     