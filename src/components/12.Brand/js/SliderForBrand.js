import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

export default function SliderForBrand({ data }) {
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
    <div className={` w-full h-full group   relative `}>
      <div className=" duration-500 opacity-0 group-hover:opacity-100 absolute  top-[30%] z-10 -left-5 rounded-full text-[#ffffff] cursor-pointer  hover:text-white  p-[10px] bg-[#333333] hover:bg-[#c41f3a]">
        <div className="  cursor-pointer flex items-center justify-center">
          <div className="  -rotate-180   " onClick={handlePrevSlide}>
            <IoIosArrowForward className="size-9 sm:size-7   duration-200 " />
          </div>
        </div>
      </div>
      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={6000}
        speed={500}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
      >
        {slides.map((item, index) => (
          <div key={index} className=" px-3 my-10">
            <div className=" w-full flex items-center justify-center">
              <img src={item} className=" w-44" alt="" />
            </div>
          </div>
        ))}
      </Slider>

      <div className="  duration-500 opacity-0 group-hover:opacity-100 absolute  top-[30%]  -right-5 rounded-full text-white cursor-pointer  hover:text-white  p-[8px] bg-[#333333] hover:bg-[#c41f3a] ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <IoIosArrowForward className="size-9 sm:size-7  duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
}
