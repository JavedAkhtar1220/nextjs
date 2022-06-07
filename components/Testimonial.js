import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

const Testimonial = () => (
  <div className="bg-gray-100 overflow-hidden">
    <section className="px-6 xl:px-0">
      <div className=" mx-auto container">
        <div className="flex flex-col items-center justify-center w-full py-5 lg:py-5">
          <h1 className="font-semibold text-gray-800 mt-10 text-3xl md:text-4xl">
            Testimonials
          </h1>
          <hr className="w-24 h-1.5 mt-4 bg-indigo-700" />
        </div>
        <div className="flex items-center justify-center w-full mt-10 lg:mt-10 overflow-hidden">
          <div className="w-full relative">
            <CarouselProvider
              naturalSlideWidth={0}
              naturalSlideHeight={125}
              totalSlides={3}
              infinite={true}
              interval={2000}
              isPlaying={true}
              playDirection={"forward"}
              isIntrinsicHeight={true}
            >
              <Slider>
                <Slide index={0}>
                  <div className="relative w-10/12 mx-auto pb-10">
                    <div className="flex lg:items-center justify-center w-full">
                      <div className="flex items-start">
                        <Image
                          className="w-8 lg:w-28"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quotation.png"
                          alt="quotation"
                        />
                        <p className="text-gray-800 text-lg leading-8 ml-7 lg:mt-12">
                          {`Always available, extremely knowledgeable, and with a tremendous can-do attitude. Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner. His guidance and advice were invaluable in producing that app which easily exceeded my expectations`}
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex justify-end mb-12 lg:mb-0 mt-6 lg:mt-24">
                      <div className="mt-4 lg:mt-0">
                        <hr className="border-b border-gray-300 mb-2 lg:mb-5 w-16" />
                        <h3 className="font-semibold  text-gray-800 leading-4 text-xl lg:text-xl uppercase tracking-tight">
                          Martin Reich
                        </h3>
                        <h4 className="mt-1 lg:mt-3 lg:text-md tracking-tight">
                          Developer
                        </h4>
                      </div>
                    </div>
                    <div className="w-full lg:w-auto justify-center lg:justify-start flex absolute items-center bottom-0 left-32">
                      <div className="pb-12 flex sm:justify-center items-center gap-2">
                        <span className="dot w-3 h-3 mx-2 bg-gray-800 rounded-full inline-block"></span>
                        <span className="dot w-3 h-3 mx-2 bg-gray-400 rounded-full inline-block"></span>
                        <span className="dot w-3 h-3 mx-2 bg-gray-400 rounded-full inline-block"></span>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="relative w-10/12 mx-auto">
                    <div className="flex lg:items-center justify-center w-full">
                      <div className="flex items-start">
                        <Image
                          className="w-8 lg:w-28"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quotation.png"
                          alt="quotation"
                        />
                        <p className="text-gray-800 text-lg leading-8 ml-7 lg:mt-12">
                          {`Always available, extremely knowledgeable, and with a tremendous can-do attitude. Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner. His guidance and advice were invaluable in producing that app which easily exceeded my expectations`}
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex justify-end mb-12 lg:mb-0 mt-6 lg:mt-24">
                      <div className="mt-4 lg:mt-0">
                        <hr className="border-b border-gray-300 mb-2 lg:mb-5 w-16" />
                        <h3 className="font-semibold text-gray-800 leading-4 text-xl lg:text-xl uppercase tracking-tight">
                          Randy Strong
                        </h3>
                        <h4 className="mt-1 lg:mt-3 lg:text-md tracking-tight">
                          Interior Designer
                        </h4>
                      </div>
                    </div>
                    <div className="w-full lg:w-auto justify-center lg:justify-start flex absolute items-center bottom-0 left-32">
                      <div className="pb-12 flex sm:justify-center items-center gap-2">
                        <span className="dot w-3 h-3 mx-2 bg-gray-400 rounded-full inline-block"></span>
                        <span className="dot w-3 h-3 mx-2 bg-gray-800 rounded-full inline-block"></span>
                        <span className="dot w-3 h-3 mx-2 bg-gray-400 rounded-full inline-block"></span>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="relative w-10/12 mx-auto">
                    <div className="flex lg:items-center justify-center w-full">
                      <div className="flex items-start">
                        <Image
                          className="w-8 lg:w-28"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quotation.png"
                          alt="quotation"
                        />
                        <p className="text-gray-800 text-lg leading-8 ml-7 lg:mt-12">
                          {`Always available, extremely knowledgeable, and with a tremendous can-do attitude. Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner. His guidance and advice were invaluable in producing that app which easily exceeded my expectations`}
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex justify-end mb-12 lg:mb-0 mt-6 lg:mt-24">
                      <div className="mt-4 lg:mt-0">
                        <hr className="border-b border-gray-300 mb-2 lg:mb-5 w-16" />
                        <h3 className="font-semibold text-gray-800 leading-4 text-xl lg:text-xl uppercase tracking-tight">
                          Ranjit Singh
                        </h3>
                        <h4 className="mt-1 lg:mt-3 lg:text-md tracking-tight">
                          Construction Manager
                        </h4>
                      </div>
                    </div>
                    <div className="w-full lg:w-auto justify-center lg:justify-start flex absolute items-center bottom-0 left-32">
                      <div className="pb-12 flex sm:justify-center items-center gap-2">
                        <span className="dot w-3 h-3 mx-2 bg-gray-400 rounded-full inline-block"></span>
                        <span className="dot w-3 h-3 mx-2 bg-gray-400 rounded-full inline-block"></span>
                        <span className="dot w-3 h-3 mx-2 bg-gray-800 rounded-full inline-block"></span>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default Testimonial;
