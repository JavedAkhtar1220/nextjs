import Image from "next/image";
import React from "react";

function Slider2() {
  return (
    <>
      <div className="px-4 py-12 -mt-24">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] py-12 lg:px-20 md:px-6 px-4 mx-auto bg-white">
          <div className="flex flex-col space-y-6 gap-x-10 lg:flex-row">
            <div className="block lg:hidden">
              <div className="flex flex-col items-center justify-center "></div>
            </div>
            <div className="flex-col space-y-8">
              <div className="flex flex-col space-y-8 gap-x-6 md:flex-row md:space-y-0">
                <div aria-label="Image-area-one">
                  <Image
                    className="hidden lg:block md:hidden"
                    src="./p1.jpg"
                    alt="boy-1"
                  />
                  <Image
                    className="hidden lg:hidden md:block"
                    src="./p1.jpg"
                    alt="boy-ipad"
                  />
                  <Image
                    className="block lg:hidden md:hidden"
                    src="./p1.jpg"
                    alt="boy-mobile"
                  />
                </div>
                <div aria-label="Image-area-two">
                  <Image
                    className="hidden lg:block md:hidden"
                    src="./p2.jpg"
                    alt="girl-red"
                  />
                  <Image
                    className="hidden lg:hidden md:block"
                    src="./p2.jpg"
                    alt="girl-ipad"
                  />
                  <Image
                    className="block lg:hidden md:hidden"
                    src="./p2.jpg"
                    alt="girl-mobile"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-8 lg:-ml-1 gap-x-6 md:flex-row md:space-y-0">
                <div aria-label="Image-area-one">
                  <Image
                    className="hidden lg:block md:hidden"
                    src="./p3.jpg"
                    alt="girl-2"
                  />
                  <Image
                    className="hidden lg:hidden md:block"
                    src="./p3.jpg"
                    alt="girl-ipad"
                  />
                  <Image
                    className="block lg:hidden md:hidden"
                    src="./p3.jpg"
                    alt="girl-mobile"
                  />
                </div>
                <div aria-label="Image-area-two">
                  <Image
                    className="hidden lg:block md:hidden"
                    src="./p4.jpg"
                    alt="girl-3"
                  />
                  <Image
                    className="hidden lg:hidden md:block"
                    src="./p4.jpg"
                    alt="girl-ipad"
                  />
                  <Image
                    className="block lg:hidden md:hidden"
                    src="./p4.jpg"
                    alt="girl-mobile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider2;
