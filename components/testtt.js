import Image from "next/image";
import React, { useState } from "react";

export default function Index() {
  const [text, setText] = useState(false);
  const [value, setValue] = useState("Latest");
  const [filter, setfilter] = useState(false);

  const handeText = (value) => {
    setValue(value);
    setText(!text);
  };

  return (
    <div className="overflow-y-hidden">
      <div className="flex flex-col justify-center items-center w-full md:pb-96 lg:pb-12">
        <div className="flex w-full my-12 px-4 md:px-6 lg:px-10 xl:px-20  justify-start items-start ">
          <div className="flex w-full space-y-6 justify-start items-start flex-col ">
            <div className="w-full relative flex justify-start lg:space-x-20 xl:space-x-32">
              <div className="w-full">
                <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 justify-items-start items-start gap-4 md:gap-x-6 lg:gap-x-6 gap-y-6">
                  <div className="flex justify-center space-y-3 items-center flex-col">
                    <div className="hover:shadow-md cursor-pointer transition duration-200 w-full">
                      <Image
                        src="https://i.ibb.co/CMFdmWp/image.png"
                        alt="flower"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="w-28 xl:w-auto text-base font-medium leading-normal text-center text-gray-800">
                        Teapot with Black tea
                      </p>
                      <p className="text-base font-medium leading-normal text-center text-gray-600">
                        $13.00
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center space-y-3 items-center flex-col">
                    <div className="hover:shadow-md cursor-pointer transition duration-200 w-full">
                      <Image src="https://i.ibb.co/6v9c2DD/1.png" alt />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="w-28 xl:w-auto text-base font-medium leading-normal text-center text-gray-800">
                        Simple Chair
                      </p>
                      <p className="text-base font-medium leading-normal text-center text-gray-600">
                        $36.00
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center space-y-3 items-center flex-col">
                    <div className="hover:shadow-md cursor-pointer transition duration-200 w-full">
                      <Image src="https://i.ibb.co/9TN2ZJb/2.png" alt />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="w-28 xl:w-auto text-base font-medium leading-normal text-center text-gray-800">
                        Smooth Disk
                      </p>
                      <p className="text-base font-medium leading-normal text-center text-gray-600">
                        $9.00
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center space-y-3 items-center flex-col">
                    <div className="hover:shadow-md cursor-pointer transition duration-200 w-full">
                      <Image src="https://i.ibb.co/fF8tWzC/3.png" alt />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="w-28 xl:w-auto text-base font-medium leading-normal text-center text-gray-800">
                        Wooden Flowepot
                      </p>
                      <p className="text-base font-medium leading-normal text-center text-gray-600">
                        $9.00
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center space-y-3 items-center flex-col">
                    <div className="hover:shadow-md cursor-pointer transition duration-200 w-full">
                      <Image src="https://i.ibb.co/r5znmnB/4.png" alt />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="w-28 xl:w-auto text-base font-medium leading-normal text-center text-gray-800">
                        Living room &amp; bedroom lights
                      </p>
                      <p className="text-base font-medium leading-normal text-center text-gray-600">
                        $13.00
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center space-y-3 items-center flex-col">
                    <div className="hover:shadow-md cursor-pointer transition duration-200 w-full">
                      <Image src="https://i.ibb.co/xJ4WskP/5.png" alt />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="w-28 xl:w-auto text-base font-medium leading-normal text-center text-gray-800">
                        Grey Lamp
                      </p>
                      <p className="text-base font-medium leading-normal text-center text-gray-600">
                        $36.00
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center space-y-3 items-center flex-col">
                    <div className="hover:shadow-md cursor-pointer transition duration-200 w-full">
                      <Image src="https://i.ibb.co/84DthWx/6.png" alt />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="w-28 xl:w-auto text-base font-medium leading-normal text-center text-gray-800">
                        Teapot with Black tea
                      </p>
                      <p className="text-base font-medium leading-normal text-center text-gray-600">
                        $13.00
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center space-y-3 items-center flex-col">
                    <div className="hover:shadow-md cursor-pointer transition duration-200 w-full">
                      <Image src="https://i.ibb.co/zQ9r8z6/7.png" alt />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="w-28 xl:w-auto text-base font-medium leading-normal text-center text-gray-800">
                        Decoration wood
                      </p>
                      <p className="text-base font-medium leading-normal text-center text-gray-600">
                        $36.00
                      </p>
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
