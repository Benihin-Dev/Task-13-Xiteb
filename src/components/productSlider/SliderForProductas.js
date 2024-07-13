import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

export default function SliderForProductas({ data }) {
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
      <div className=" w-1/12 sm:flex items-center justify-center">
        <div className="   py-4 w-fit  duration-200 " onClick={handlePrevSlide}>
          <IoIosArrowForward className="text-gray-700 rotate-180 size-7" />
        </div>
      </div>
      <div className=" w-10/12">
        <div className="w-full h-full bg-transparent   ">
          <Slider
            ref={sliderRef}
            dots={false}
            infinite={true}
            slidesToShow={4}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={6000}
            speed={1000}
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
                  slidesToShow: 1.5,
                },
              },
            ]}
          >
            {slides.map((item, index) => (
              <div key={index} className=" w-full px-3 sm:px-5">
                <div className="pb-2 relative ">
                  <div className="  w-full items-center justify-center  py-5 px-1 overflow-hidden  bg-[#e9e9e9]">
                    <div className=" w-11/12  aspect-square py-2 sm:py-5 mx-auto">
                      <img
                        src={item.image}
                        alt=""
                        className=" object-contain h-52"
                      />
                    </div>
                  </div>
                  <p className=" w-full text-center overflow-hidden  leading-5 mt-5 px-5 uppercase">
                    {item.name}
                  </p>
                  <p className=" w-full text-center mt-2 text-gray-400">
                    ${item.price}.00
                  </p>
                  <div className=" flex items-center justify-center mt-4">
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, index) =>
                        index < item.rate ? (
                          <HiStar
                            key={index}
                            className="text-[#f9c854] size-4"
                          />
                        ) : (
                          <HiOutlineStar
                            key={index}
                            className="text-gray-400 size-4"
                          />
                        )
                      )}
                    </div>
                  </div>
                  <div className="absolute main1 hover:p- p-2 duration-500 top-0 w-full h-full left-0 bg-[#ffffff00]  hover:bg-[#e9e9e9d4] ">
                    <div className="sub1 duration-200 w-full h-full relative">
                      <div className=" w-full h-full  hover:p-0  duration-300 p-2">
                        <img
                          src={item.image}
                          alt=""
                          className=" h-[100%] border border-black w-full object-cover image"
                        />
                      </div>
                      <div className=" absolute bottom-[10%] w-full flex items-center justify-center px-3">
                        <button className="  px-8 py-1 bg-[#2c2c2cde] text-white duration-200  hover:bg-[#ffffffd0] hover:text-black border-[#2c2c2c] text-xs sm:text-sm border shadow-md mt-8">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className=" w-1/12">
        <div
          className=" py-4 w-fit px-1 rotate-180  duration-200 "
          onClick={handleNextSlide}
        >
          <IoIosArrowForward className="text-gray-700 -rotate-180 size-7" />
        </div>
      </div>
    </div>
  );
}
