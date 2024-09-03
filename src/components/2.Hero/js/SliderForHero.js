import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";

export default function SliderForHero({ data }) {
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
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "1px solid #66bc89",
    backgroundColor: "#33333300",
  };

  const activeDotStyles = {
    ...dotStyles,
    backgroundColor: "#66bc89",
  };

  return (
    <div className={` w-full h-full  relative bg-[#f0f2f5] `}>
      <div className=" absolute  top-[45%] size-10 flex items-center justify-center z-10 left-1 sm:left-5 rounded-full text-white cursor-pointer  hover:bg-[#c7c7c7]   bg-[#b5b5b56c]  ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handlePrevSlide}>
            <IoIosArrowBack className="size-8 sm:size-7  duration-200 " />
          </div>
        </div>
      </div>

      <Slider
        ref={sliderRef}
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={10000}
        speed={500}
        dotsClass="slick-dots custom-dots top-[90%] "
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
          <div key={index} className="bg-[#ffd500] ">
            {item}
          </div>
        ))}
      </Slider>

      <div className=" absolute  top-[45%] size-10 flex items-center justify-center z-10 right-1 sm:right-5 rounded-full text-white cursor-pointer  hover:bg-[#c7c7c7]   bg-[#b5b5b56c]  ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <IoIosArrowBack className="size-8 sm:size-7 rotate-180  duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
}
