import Head from 'next/head';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyHero from '../components/PropertyHero';
import PropSlider from '../components/PropSlider';
import PropVideo from '../components/PropVideo';
import PropConnect from '../components/PropConnect';
import Slider2 from '../components/Slider2';
import PropFeatures from '../components/PropFeatures';
import PropAmeneties from '../components/PropAmeneties';
import PropRenders from '../components/PropRenders';

function property() {
    return (
        <div className="items-center justify-center">
          <Head>
            <title>Property Page</title>
            <meta name="description" content="Real Estate Service Network" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
     {/* Header */}
         <Header className="" />
            {/* Hero */}
      <div>
          <PropertyHero />
      </div>
      <div>
        <Slider2 />
      </div>
      <div>
        <PropVideo />
      </div>
      <div>
        <PropConnect />
      </div>
      <div>
        <PropFeatures />
      </div>
      <div>
        <PropAmeneties />
      </div>
      <div>
      <div className="flex justify-center text-4xl font-black mt-10 text-gray-600 mb-10"><h1>Property Renders</h1></div>
        <div>
                <h2 className="text-xl text-gray-500 font-black lg:px-32 sm:px-6 px-4">Master Ensuite</h2>
         </div>
        <PropRenders />
        <div>
                <h2 className="text-xl text-gray-500 font-black lg:px-32 sm:px-6 px-4">Kitchen</h2>
         </div>
         <PropRenders />
         <div>
                <h2 className="text-xl text-gray-500 font-black lg:px-32 sm:px-6 px-4">Living Area</h2>
         </div>
         <PropRenders />
         <div>
                <h2 className="text-xl text-gray-500 font-black lg:px-32 sm:px-6 px-4">Highlights + Features</h2>
         </div>
         <PropRenders />
         </div>
         <div className="bg-blue-100">
           <h1 className="text-4xl text-gray-600 font-black justify-center flex w-full pt-14 cursor-pointer">Appliances</h1>
           <div className="mt-6 flex items-center justify-center">
                        <div className="w-12 flex flex-col items-center">
                        <img className="h-12 rounded-full cursor-pointer" src="../midland.jpg" />
                         </div>
                         <div className="pl-3 justify-center items-center font-semibold leading-normal text-gray-800">
                         Ditributor: <span className="font-bold cursor-pointer">Midland Appliances</span>
                        </div>
                      </div>
           <PropSlider />
           <PropSlider />
           <h1 className="text-4xl text-gray-600 font-black justify-center flex w-full pt-14">Pluming Fixtures</h1>
           <div className="mt-6 flex items-center justify-center">
                        <div className="w-12 flex flex-col items-center">
                        <img className="h-12 rounded-full cursor-pointer" src="../kohler.jpg" />
                         </div>
                         <div className="pl-3 justify-center items-center font-semibold leading-normal text-gray-800">
                         Manufacturer: <span className="font-bold cursor-pointer">Kohler</span>
                        </div>
             </div>
             <div className="mt-6 flex items-center justify-center">
                        <div className="w-12 flex flex-col items-center">
                        <img className="h-12 rounded-full cursor-pointer" src="../pearl.jpg" />
                         </div>
                         <div className="pl-3 justify-center items-center font-semibold leading-normal text-gray-800">
                         Manufacturer: <span className="font-bold cursor-pointer">Pearl</span>
                        </div>
             </div>
             <div className="mt-6 flex items-center justify-center">
                        <div className="w-12 flex flex-col items-center">
                        <img className="h-12 rounded-full cursor-pointer" src="../pearl.jpg" />
                         </div>
                         <div className="pl-3 justify-center items-center font-semibold leading-normal text-gray-800">
                         Distributor: <span className="font-bold cursor-pointer">Pearl</span>
                        </div>
             </div>
             <div className="mt-6 flex items-center justify-center">
                        <div className="w-12 flex flex-col items-center">
                        <img className="h-12 rounded-full cursor-pointer" src="../fibretech.jpg" />
                         </div>
                         <div className="pl-3 justify-center items-center font-semibold leading-normal text-gray-800">
                         Distributor: <span className="font-bold cursor-pointer">Fibretech Ltd.</span>
                        </div>
             </div>
           <PropSlider />
           <PropSlider />
         </div>
         <div className="bg-blue-100">
         <div>
                <h2 className="text-xl text-gray-500 font-black lg:px-32 sm:px-6 px-4">Kitchen</h2>
         </div>
         <PropRenders />
         <div>
                <h2 className="text-xl text-gray-500 font-black lg:px-32 sm:px-6 px-4">Laundry Room</h2>
         </div>
         <PropRenders />
         </div>
            {/* Footer */}
        <Footer className="flex items-center"/>
    
        </div>
      )
}

export default property
