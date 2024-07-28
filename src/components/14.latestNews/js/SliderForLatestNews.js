import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdPricetags } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { LiaArrowLeftSolid } from "react-icons/lia";

export default function SliderForLatestNews({ data }) {
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
    <div className=" flex items-center  justify-center relative pt-12">
      <div className=" absolute top-0 left-0 w-full flex px-4  items-center justify-end">
        <div className=" w-fit flex items-center justify-center gap-1">
          <div className="   flex items-center justify-center">
            <div
              className="   py-4 w-fit  duration-200 "
              onClick={handlePrevSlide}
            >
              <LiaArrowLeftSolid className="text-gray-700 size-7" />
            </div>
          </div>
          <div className="  ">
            <div
              className=" py-4 w-fit px-1 rotate-180  duration-200 "
              onClick={handleNextSlide}
            >
              <LiaArrowLeftSolid className="text-gray-700  size-7" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <div className="w-full h-full bg-transparent   ">
          <Slider
            ref={sliderRef}
            dots={false}
            infinite={true}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={5000}
            speed={1000}
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
              <div key={index} className=" w-full px-4">
                <div className=" relative w-full border group overflow-hidden  rounded">
                  <div className="  relative  overflow-hidden">
                    <img src={item.img} alt="" className=" " />
                    <img
                      src={item.img}
                      alt=""
                      className=" absolute top-0 left-0 w-full h-full  group-hover:scale-110 duration-200"
                    />
                  </div>
                  <div className=" p-8 bg-white">
                    <p className=" text-lg font-semibold">{item.title}</p>
                    <p className=" text-sm mt-3 text-gray-500">{item.news}</p>
                    <div className=" flex items-center justify-center mt-5 gap-3">
                      <div className=" w-1/3 flex items-center gap-1 text-gray-600">
                        <IoMdPricetags className=" size-4 rotate-12" />
                        <p className=" text-gray-700 text-xs font-semibold">
                          Beauty
                        </p>
                      </div>
                      <div className=" w-1/3 flex items-center gap-1 text-gray-600">
                        <FaUserAlt className=" size-3 " />
                        <p className=" text-gray-700 text-xs  font-semibold">
                          Rachel
                        </p>
                      </div>
                      <div className=" w-1/3 flex items-center gap-1 text-gray-600">
                        <BiSolidMessageRounded className=" size-4" />
                        <p className=" text-gray-700 text-xs  font-semibold">
                          0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" absolute top-5 left-5 p-2  bg-[#00b9f5]">
                    <p className=" w-full text-center   leading-4 ">
                      {item.date} <br />
                      <span className=" w-full font-semibold text-center">
                        {item.month}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
