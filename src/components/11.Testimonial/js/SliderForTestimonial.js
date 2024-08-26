import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import Templet from "./Templet";

export default function SliderForTestimonial({ data }) {
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

  // Test by applying styles directly
  const dotStyles = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#333333",
  };

  const activeDotStyles = {
    ...dotStyles,
    backgroundColor: "#c41f3a",
  };

  return (
    <div className={` w-full h-full  relative `}>
      {/* <div className=" absolute  top-[30%] z-10 -left-1 sm:left-5 rounded-full text-gray-500 cursor-pointer  hover:text-white  p-[2px] bg-gray-300 hover:bg-[#2faf36]">
        <div className="  cursor-pointer flex items-center justify-center">
          <div className="  -rotate-180   " onClick={handlePrevSlide}>
            <IoIosArrowRoundForward className="size-7 sm:size-6   duration-200 " />
          </div>
        </div>
      </div> */}
      <Slider
        ref={sliderRef}
        dots={true}
        infinite={true}
        slidesToShow={2}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={6000}
        speed={500}
        dotsClass="slick-dots custom-dots"
        customPaging={(i) => (
          <div
            style={
              i === sliderRef.current?.innerSlider?.state.currentSlide
                ? activeDotStyles
                : dotStyles
            }
          ></div>
        )}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {slides.map((item, index) => (
          <div key={index} className=" px-3 my-10">
            <Templet data={item} />
          </div>
        ))}
      </Slider>

      {/* <div className=" absolute  top-[30%] z-10 -right-1 sm:right-5 rounded-full text-gray-500 cursor-pointer  hover:text-white  p-[2px] bg-gray-300 hover:bg-[#2faf36]">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <IoIosArrowRoundForward className="size-7 sm:size-6  duration-200 " />
          </div>
        </div>
      </div> */}
    </div>
  );
}
