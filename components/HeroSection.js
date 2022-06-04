import Image from "next/image";
import {SearchIcon, MenuIcon} from "@heroicons/react/outline"
function HeroSection() {
   /*  const search = e => {
        e.preventDefault();
      } */
    return (
        <div className="relative flex flex-col justify-center h-screen bg-black">
           <Image src="/hero-bg.jpg" layout="fill" objectFit="cover" className="bg-blend-overlay opacity-75"/>
           <div className="relative w-full text-center  text-gray-100">
           <div className="text-5xl font-black">
               <h1>Explore Your City</h1>
            </div>
           <div className="text-xl mt-5">
               <h2>Look for Real Estate, or Real Estate related Business</h2>
            </div>
            </div>
          <div className="relative mt-10">
           <form  className="flex flex-col flex-grow items-center">
               <div className="absolute flex w-full max-w-lg sm:max-w-xl lg:max-w-2xl hover:shadow-lg focus-within:shadow-lg 
               rounded-md border-2 h-14 border-gray-100 items-center px-5 py-3 ">
                   <SearchIcon className="h-5 mr-3 text-gray-100"/>
                   <input type="text" placeholder="Search Properties, Agents, Developers, Trade specialist.." className="focus:outline-none flex-grow bg-transparent placeholder-gray-100 text-gray-100"/>
                   <MenuIcon className="h-5 mr-3 text-gray-100"/>
               </div>
               <div className="flex mt-20">
                   <button className="px-8 py-3 rounded-md bg-gray-50 border-gray-100 ring-gray-200 hover:ring-2 hover:shadow-md">
                       Search
                   </button>
               </div>
           </form>
           
           </div>
        </div>
    )
}
{/* [300px] sm:h-[400px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px] 
 w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md
*/}

export default HeroSection
