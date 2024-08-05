import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { PiCopyLight } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

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
    <div className={` w-full   bg-white `}>
      <div className=" border-b px-5 py-8 w-full ">
        <div className=" w-full flex items-center justify-between">
          <div className=" w-2/3">
            <p className=" text-lg font-semibold pb-3">Manufacturing Brand</p>
            <p className=" text-sm text-gray-600">
              The opportunity will quickly pass. Take it!
            </p>
          </div>
          <div className=" w-1/3 flex items-center justify-end">
            <div className=" w-fit flex items-center justify-center gap-1">
              <div className=" pr-1   flex items-center justify-center">
                <div
                  className="   py-4 w-fit rotate-90 "
                  onClick={handlePrevSlide}
                >
                  <MdOutlineKeyboardDoubleArrowDown className="text-gray-500 size-6 hover:text-[#ffc137]  duration-200 " />
                </div>
              </div>
              <p className=" px- text-gray-400 text-2xl pb-1">|</p>
              <div className="">
                <div
                  className=" py-4 w-fit px-1 -rotate-90   duration-200 "
                  onClick={handleNextSlide}
                >
                  <MdOutlineKeyboardDoubleArrowDown className="text-gray-500  size-6 hover:text-[#ffc137]  duration-200 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center  py-5 justify-center relative">
        <div className=" w-full p-5">
          <div className="w-full h-full bg-transparent   ">
            <Slider
              ref={sliderRef}
              dots={false}
              infinite={true}
              slidesToShow={7}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={4000}
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
                <div key={index} className=" w-full px-2 sm:px-4">
                  <img src={item} alt="" className=" w-full" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
