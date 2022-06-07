import React from "react";
import Image from "next/image";

export default function ProductGrid() {
  return (
    <div className="overflow-y-hidden">
      <div className="flex flex-col justify-center items-center w-full md:pb-96 lg:pb-12">
        <div className="flex w-full my-12 px-4 md:px-6 lg:px-10 xl:px-20  justify-start items-start ">
          <div className="flex w-full space-y-6 justify-start items-start flex-col ">
            <div className="w-full relative flex justify-start lg:space-x-20 xl:space-x-32">
              <div className="w-full">
                <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 justify-items-start items-start gap-4 md:gap-x-6 lg:gap-x-6 gap-y-6">
                  <div className="flex justify-center space-y-3 items-center flex-col">
                    <h2>Wall Tile</h2>
                    <div className="hover:shadow-md cursor-pointer transition duration-200 w-full">
                      <Image
                        src="https://i.ibb.co/CMFdmWp/image.png"
                        alt="flower"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-2">
                      <p className="w-28 xl:w-auto text-base font-medium leading-normal text-center text-gray-800">
                        Whisper Grey
                      </p>
                      <p className="text-xs justify-center">Dongpeng</p>
                    </div>
                  </div>
                  <div className="flex justify-center space-y-3 items-center flex-col">
                    <h2>Floor Tile</h2>
                    <div className="hover:shadow-md cursor-pointer transition duration-200 w-full">
                      <Image src="https://i.ibb.co/6v9c2DD/1.png" alt="1" />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="w-28 xl:w-auto text-base font-medium leading-normal text-center text-gray-800">
                        Whisper White
                      </p>
                      <p className="text-xs justify-center">Dongpeng</p>
                    </div>
                  </div>
                  <div className="flex justify-center space-y-3 items-center flex-col">
                    <h2>Cabbinet</h2>
                    <div className="hover:shadow-md cursor-pointer transition duration-200 w-full">
                      <Image src="https://i.ibb.co/9TN2ZJb/2.png" alt="2" />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="w-28 xl:w-auto text-base font-medium leading-normal text-center text-gray-800">
                        Grey
                      </p>
                      <p className="text-xs justify-center">Local Brand</p>
                    </div>
                  </div>
                  <div className="flex justify-center space-y-3 items-center flex-col">
                    <h2>Counter Top</h2>
                    <div className="hover:shadow-md cursor-pointer transition duration-200 w-full">
                      <Image src="https://i.ibb.co/fF8tWzC/3.png" alt="3" />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="w-28 xl:w-auto text-base font-medium leading-normal text-center text-gray-800">
                        Blizzard Grey
                      </p>
                      <p className="text-xs justify-center">Brand Name</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
