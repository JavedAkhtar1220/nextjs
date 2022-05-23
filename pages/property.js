import Head from 'next/head';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyHero from '../components/PropertyHero';
import PropSlider from '../components/PropSlider';
import PropVideo from '../components/PropVideo';
import PropConnect from '../components/PropConnect';

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
        <PropSlider />
      </div>
      <div>
        <PropVideo />
      </div>
      <div>
        <PropConnect />
      </div>
    
            {/* Footer */}
        <Footer className="flex items-center"/>
    
        </div>
      )
}

export default property
