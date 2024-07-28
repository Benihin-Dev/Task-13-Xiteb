import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import brandImg from "../img/brand1.png";

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
    <div className=" flex items-center justify-center">
      <div className=" w-1/12 bg-[#f9f9f9] z-10 sm:flex items-center justify-center">
        <div
          className="   mb-1 py-4 w-fit  duration-200 "
          onClick={handlePrevSlide}
        >
          <IoIosArrowForward className="text-gray-500 rotate-180 size-7" />
        </div>
      </div>
      <div className=" w-10/12">
        <div className="w-full h-full bg-transparent   ">
          <Slider
            ref={sliderRef}
            dots={false}
            infinite={true}
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            speed={800}
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
              <div key={index} className="w-fit px-3">
                <img src={item} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className=" w-1/12  bg-[#f9f9f9] z-10">
        <div
          className=" py-4 w-fit px-1 mb-1 rotate-180  duration-200 "
          onClick={handleNextSlide}
        >
          <IoIosArrowForward className="text-gray-500 -rotate-180 size-7" />
        </div>
      </div>
    </div>
  );
}
