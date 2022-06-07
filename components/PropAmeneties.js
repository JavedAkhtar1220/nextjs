import React from "react";
import Image from "next/image";

export default function PropAmeneties() {
  return (
    <>
      <div className="bg-gray-500 xl:px-20 md:px-6 px-4 md:py-20 py-14 w-full flex flex-col items-center justify-center">
        <h1 className="text-gray-100 lg:text-4xl md:text-2xl text-xl lg:leading-9 md:leading-6 leading-4 font-semibold">
          Ameneties
        </h1>
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-24 gap-y-11 mt-11">
          <div className="flex flex-col md:items-start items-center md:justify-start justify-center">
            <Image
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-1.svg"
              className="w-14 h-14"
              alt="Vector-1"
            />
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Conceirge
            </p>
          </div>
          <div className="flex flex-col md:items-start items-center md:justify-start justify-center">
            <Image
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-2.png"
              className="w-14 h-14"
              alt="Vector-1"
            />
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Party Room
            </p>
          </div>
          <div className="flex flex-col md:items-start items-center md:justify-start justify-center">
            <Image
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-3.png"
              className="w-14 h-14"
              alt="Vector-1"
            />
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Smart Entry
            </p>
          </div>
          <div className="lg:hidden flex flex-col md:items-start items-center md:justify-start justify-center">
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-4.png"
                className="w-14 h-10"
                alt="Vector-1"
              />
            </div>
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Lounge
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-24 gap-y-11 mt-11">
          <div className="lg:block hidden">
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-4.png"
                className="w-14 h-10"
                alt="Vector-1"
              />
            </div>
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Think Space
            </p>
          </div>
          <div className="flex flex-col md:items-start items-center md:justify-start justify-center">
            <Image
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-5.png"
              className="w-14 h-14"
              alt="Vector-1"
            />
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Fitness Center
            </p>
          </div>
          <div className="flex flex-col md:items-start items-center md:justify-start justify-center">
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-6.png"
                className="w-14 h-12"
                alt="Vector-1"
              />
            </div>
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Roof Terrace
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
