import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OfferSlider({ data }) {
  const slides = data.map((item) => item);
  const sliderRef = useRef(null);

  return (
    <div className="w-full h-full bg-transparent   ">
      <Slider
        ref={sliderRef}
        arrows={false}
        dots={false}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={6000}
        speed={1000}
      >
        {slides.map((item, index) => (
          <div
            key={index}
            className=" w-full  py-16 lg:py-10 shadow-md border lg:mt-10 mx-auto relative overflow-hidden "
          >
            <div className=" z-30 w-full">
              <div className=" p-5 w-full relative ">
                <p className=" font-allura text-[#ecd7cf]  mb-5  text-6xl lg:text-7xl">
                  {item.styleDesc}
                </p>
                <p className=" absolute top-[50%] text-2xl  w-1/2 sm:w-1/3 leading-6 ">
                  {item.heading}
                </p>
              </div>
              <div className=" px-5">
                <p className=" px-8  mt-4  border-[#2c2c2c] border-b-2 w-fit"></p>
                <p className="  w-5/12 pt-2 text-gray-400">{item.decs} </p>
                <button className=" px-8 py-3 hover:bg-[#2c2c2cde] hover:text-white duration-200  bg-[#ffffffd0] text-black border-[#2c2c2c] text-sm border shadow-md mt-8">
                  SHOP NOW
                </button>
              </div>
              <div className=" absolute bottom-10 shadow-gray-300 left-[65%] shadow-md -rotate-12 size-20 rounded-full flex items-center justify-center bg-[#d8504b]">
                <div className="">
                  <p className=" text- text-white leading-4 -rotate-12">
                    {item.offerRate}
                    <br />
                    Off
                  </p>
                </div>
              </div>
            </div>
            <div className=" absolute h-full -z-10 bg-[#f9f4ed]   top-0 bottom-0 left-[20%] sm:left-[30%] right-0">
              <img
                src={item.image}
                alt=""
                className=" w-full object-contain h-full"
              />
            </div>
            <div className=" absolute h-full w-full bg-[#f9f4ed]  -z-20 top-0 bottom-0 left-[0%] sm:right-[60%] right-[80%]"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
