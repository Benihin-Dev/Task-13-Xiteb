import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";

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

  // Test by applying styles directly
  const dotStyles = {
    width: "11px",
    height: "11px",
    borderRadius: "50%",
    border: "1px solid #66bc89",
    backgroundColor: "#33333300",
  };

  const activeDotStyles = {
    ...dotStyles,
    backgroundColor: "#66bc89",
  };

  return (
    <div className={`  relative weeklyOfferSliderParent `}>
      <div
        onClick={handlePrevSlide}
        className=" absolute weeklyOfferSliderChild hidden top-[10%] size-11 shadow-md bg-[#ffffffd0] items-center justify-center z-10 -left-4  rounded-sm text-[#ffa201a3] cursor-pointer  hover:bg-[#ffa101] hover:text-white  "
      >
        <div className=" cursor-pointer">
          <div className="  duration-200 ">
            <IoIosArrowBack className="size-7 sm:size-6   duration-200 " />
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
        dotsClass="slick-dots custom-dots top-[110%] "
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
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
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
          <div
            key={index}
            className=" px-3 py-2 border-l sm:border-l-transparent border-r border-[#ffa101] border-dashed "
          >
            <img
              src={item}
              alt=""
              className=" mx-auto w-10/12 object-contain"
            />
          </div>
        ))}
      </Slider>

      <div
        onClick={handleNextSlide}
        className=" absolute weeklyOfferSliderChild hidden top-[10%] size-11 shadow-md bg-[#ffffffd0] items-center justify-center z-10 -right-4  rounded-sm text-[#ffa201a3] cursor-pointer  hover:bg-[#ffa101] hover:text-white  "
      >
        <div className=" cursor-pointer">
          <div className="  duration-200 ">
            <IoIosArrowBack className="size-7 sm:size-6 rotate-180  duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
}
