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
    
            {/* Footer */}
        <Footer className="flex items-center"/>
    
        </div>
      )
}

export default property
