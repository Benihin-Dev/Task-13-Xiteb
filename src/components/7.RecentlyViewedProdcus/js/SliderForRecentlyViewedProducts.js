import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiCartDownload } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function SliderForRecentlyViewedProducts({ data }) {
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
    <div className={` w-full `}>
      <div className=" w-full flex items-center justify-end">
        <div className="  cursor-pointer     flex items-center justify-center">
          <div className="  -rotate-180   " onClick={handlePrevSlide}>
            <MdKeyboardArrowRight className="text-gray-500 size-7 hover:text-[#000000]  duration-200 " />
          </div>
        </div>
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <MdKeyboardArrowRight className="text-gray-500  size-7 hover:text-[#000000]  duration-200 " />
          </div>
        </div>
      </div>
      <div className=" flex items-center pt-4  pb-2 justify-center relative">
        <div className=" w-full">
          <div className="w-full h-full bg-transparent   ">
            <Slider
              ref={sliderRef}
              dots={false}
              infinite={true}
              slidesToShow={7}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={6000}
              speed={1000}
              responsive={[
                {
                  breakpoint: 954,
                  settings: {
                    slidesToShow: 4,
                  },
                },
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
                <div key={index} className="">
                  <div className=" w-full pb-5 overflow-hidden rounded-sm  border-gray-600 shadow-black duration-200 group hover:shadow-lg hover:z-20 z-10 hover:border relative">
                    <p className="px-3 z-10 text-[10px] text-gray-400 pr-5  cursor-default">
                      {item.category}
                    </p>
                    <div className="px-3 z-10 w-full border-r border-l border-gray-200 group-hover:border-transparent">
                      <p className=" font-bold leading-4 text-[#0872c7] text-[12px] pt-1  h-10 cursor-default">
                        {item.name}
                      </p>
                      <img
                        src={item.img}
                        className=" pb-5 pt-2 mx-auto group-hover:scale-110 duration-200"
                        alt=""
                      />
                      <p className=" cursor-default text-gray-600">
                        ${item.price}
                      </p>

                      <div className=" absolute top-0  bg-[#ffffffdc]  border border-gray-100  hidden group-hover:block right-0  px-1  py-1  slideFromRight2   items-center gap-1">
                        <div className=" flex items-center justify-center   p-1 cursor-pointer  ">
                          <AiOutlineRetweet className="  text-gray-400 size-6  hover:text-[#0872c7] duration-200" />
                        </div>
                        <div className=" flex items-center p-[2px]   justify-center cursor-pointer">
                          <GoHeart className=" size-6 text-gray-400 hover:text-[#0872c7] duration-200" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={` absolute top-[80%]  
                      right-4 group cursor-pointer  size-8 rounded-full bg-[#e6154b] text-white flex items-center justify-center `}
                    >
                      <BiCartDownload className=" size-5  " />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
