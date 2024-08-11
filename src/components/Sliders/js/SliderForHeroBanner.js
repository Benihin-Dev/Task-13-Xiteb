import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import SubscribeSearchBar from "../../SubscribeSearchBar/js/SubscribeSearchBar";

export default function SliderForHeroBanner({ data }) {
  const slides = data.map((item) => item);
  const sliderRef = useRef(null);

  //next btn function
  const handleNextSlide = (event) => {
    event.stopPropagation();
    sliderRef.current.slickNext();
  };

  //previous btn function
  const handlePrevSlide = (event) => {
    event.stopPropagation();
    sliderRef.current.slickPrev();
  };

  return (
    <div className={` w-full h-full  relative `}>
      <div className=" absolute top-[50%] md:top-[90%] z-10 left-2 rounded-full text-gray-500 cursor-pointer  hover:text-white  p-[2px] bg-[#ffffff5c] hover:bg-[#2faf36]">
        <div className="  cursor-pointer flex items-center justify-center">
          <div className="  -rotate-180   " onClick={handlePrevSlide}>
            <MdKeyboardArrowRight className="size-3 md:size-5   duration-200 " />
          </div>
        </div>
      </div>
      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={6000}
        speed={500}
      >
        {slides.map((item, index) => (
          <div key={index} className=" w-full  h-full relative">
            <img src={item.img} alt="" className="  " />{" "}
            <div className=" absolute -top-1 left-0  w-[110%] h-[130%] ">
              <img
                src={item.img}
                alt=""
                className=" w-full h-full object-cover object-left-bottom"
              />
            </div>
            <div className="w-[100%] sm:w-[65%] md:w-[80%] h-full absolute top-0 left-0  flex items-center md:items-end p-5 md:p-10">
              <div>
                <p className=" text-[#41525a] text-xl md:text-3xl lg:text-4xl pr-10 font-semibold">
                  {item.title}
                </p>
                <p className=" mt-3 text-gray-400 pb-5 text-xs sm:text-base lg:text-xl">
                  {item.subText}
                </p>
                <SubscribeSearchBar />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className=" absolute top-[50%] md:top-[90%] z-10 right-2 rounded-full text-gray-500 cursor-pointer  hover:text-white  p-[2px] bg-[#ffffff5c] hover:bg-[#2faf36]">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <MdKeyboardArrowRight className="size-3 md:size-5  duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
}
