import Image from "next/image";
import React from "react";

function PropConnect() {
  return (
    <>
      <div className="px-4 py-12 -mt-12">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full mx-auto py-12 lg:px-20 md:px-6 px-4 bg-white">
          <div className="text-center">
            <div className="pl-5 py-5">
              <h1 className="text-xl font-semibold text-gray-700">
                Seller information
              </h1>
              <div className="flex justify-center items-center py-5">
                <Image
                  src="../Stanford_Siu.jpg"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-sm text-gray-700">Stanford Siu</h3>
                  <p className="text-xs text-gray-600">
                    Joined on 12 September 2020
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:mt-0 mt-4">
                <a href="javascript:void(0)">
                  {" "}
                  <button className="py-2 px-6 bg-indigo-700 text-white text-sm mr-4 focus:outline-none">
                    Chat With Stanford
                  </button>
                </a>
                <a href="javascript:void(0)">
                  {" "}
                  <button className="py-2 px-6 bg-transparent border border-indigo-700 text-indigo-700 text-sm focus:outline-none">
                    Call Stanford
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center lg:flex-row gap-x-6">
            <div className="lg:max-w-2/3 w-full relative">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNzPygqgKhlQRLWCmeX7PMU4&key=AIzaSyC181FbUhddAYgHPYvbdjpGjDCT5KYvwAw"
                width="100%"
                height={496}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropConnect;
