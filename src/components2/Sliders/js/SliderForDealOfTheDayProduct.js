import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductTempletForDealOfTheDay from "../../7.DealOfTheDay/js/ProductTempletForDealOfTheDay";

export default function SliderForDealOfTheDayProduct({ data }) {
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
      {/* <div className=" absolute  top-[30%] z-10 -left-1 sm:left-5 rounded-full text-gray-500 cursor-pointer  hover:text-white  p-[2px] bg-gray-300 hover:bg-[#2faf36]">
        <div className="  cursor-pointer flex items-center justify-center">
          <div className="  -rotate-180   " onClick={handlePrevSlide}>
            <IoIosArrowRoundForward className="size-7 sm:size-6   duration-200 " />
          </div>
        </div>
      </div> */}
      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={8000}
        speed={2000}
        responsive={[
          {
            breakpoint: 954,
            settings: {
              slidesToShow: 2,
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
          <div key={index} className=" px-3 pt-10  pb-40 sm:pb-52">
            <ProductTempletForDealOfTheDay item={item} />
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
