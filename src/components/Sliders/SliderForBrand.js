import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight } from "react-icons/md";

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
    <div
      className={` w-full  flex items-center relative border-t border-b border-gray-100 `}
    >
      <div className=" absolute top-[20%] md:top-[25%] z-20 -left-2">
        <div className="  cursor-pointer      flex items-center justify-center">
          <div className="  -rotate-180   " onClick={handlePrevSlide}>
            <MdKeyboardArrowRight className="text-gray-500 size-7 hover:text-[#000000]  duration-200 " />
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center pt-2  pb-1  justify-center relative">
        <div className=" w-full">
          <div className="w-full h-full bg-transparent   ">
            <Slider
              ref={sliderRef}
              dots={false}
              infinite={true}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={6000}
              speed={500}
              responsive={[
                {
                  breakpoint: 954,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4,
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
                <div key={index} className=" w-full px-10">
                  <img src={item} alt="" className=" px-2 grayscale w-full" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="absolute top-[20%] md:top-[25%] -right-2  z-10">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <MdKeyboardArrowRight className="text-gray-500  size-7 hover:text-[#000000]  duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
}
