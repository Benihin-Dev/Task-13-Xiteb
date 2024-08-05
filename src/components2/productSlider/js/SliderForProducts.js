import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { PiCopyLight } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function SliderForProducts({ data }) {
  const slides = data.data.map((item) => item);
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
      className={` w-full  px-0 mx-auto sm:w-11/12 md:w-10/12 ${data.bgColor}   border rounded `}
    >
      <div className=" border-b px-5 py-8 w-full ">
        <div className=" w-full flex items-center justify-between">
          <div className=" w-2/3">
            <p className=" text-lg font-semibold pb-3"> {data.title}</p>
            <p className=" text-sm text-gray-600">{data.desc}</p>
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
      <div className=" flex items-center pt-4  pb-2 justify-center relative">
        <div className=" w-full p-5">
          <div className="w-full h-full bg-transparent   ">
            <Slider
              ref={sliderRef}
              dots={false}
              infinite={true}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={6000}
              speed={1000}
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
                <div key={index} className=" w-full px-2 sm:px-4">
                  <div className=" border p-5 relative group overflow-hidden rounded hover:shadow bg-[white] ">
                    <img src={item.img} alt="" />
                    <p className=" pt-4 pb-2 font-semibold  text-sm">
                      {item.name}
                    </p>
                    <div className="flex items-center ">
                      {Array.from({ length: 5 }, (_, index) =>
                        index < item.rate ? (
                          <HiStar
                            key={index}
                            className="text-[#fe7b00] size-[18px]"
                          />
                        ) : (
                          <HiOutlineStar
                            key={index}
                            className="text-gray-400 size-[18px]"
                          />
                        )
                      )}
                    </div>
                    <div className=" flex items-center gap-3 mt-5">
                      <p className=" text-lg font-semibold ">
                        $ {item.discountPrice}.00
                      </p>
                      <p className=" line-through   text-gray-600">
                        $ {item.price}.00
                      </p>
                    </div>
                    <button className=" mt-3 w-full text-sm px-5 py-2 rounded-md hover:text-white duration-300 border border-[#393939] hover:bg-[#393939] ">
                      Add To Cart
                    </button>
                    <div className="slideFromRight group-hover:block hidden absolute space-y-4  top-0 right-0 m-2">
                      <div className=" bg-gray-100 rounded p-[6px] shadow cursor-pointer duration-200 hover:bg-[#393939] hover:text-gray-50">
                        <CiHeart className=" size-7" />
                      </div>
                      <div className=" bg-gray-100 rounded p-[6px] shadow cursor-pointer duration-200 hover:bg-[#393939] hover:text-gray-50">
                        <PiCopyLight className=" size-7" />
                      </div>
                      <div className=" bg-gray-100 rounded py-[9px] shadow cursor-pointer duration-200 hover:bg-[#393939] hover:text-gray-50 flex items-center justify-center px-1">
                        <FaRegEye className=" size-5" />
                      </div>
                    </div>
                    {item.sale && (
                      <p className=" absolute top-4 left-4 w-fit bg-[#ffc137] text-white cursor-pointer px-5 py-1 text-sm rounded-md">
                        Sale
                      </p>
                    )}
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
