import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import qouteImg from "../img/quote.png";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

export default function SliderForTestiminial({ data }) {
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
    <div className=" flex  h-full justify-center  relative mt-10">
      <div
        onClick={handlePrevSlide}
        className=" cursor-pointer w-1/12 z-10 flex items-center justify-center  duration-200 hover:bg-[#51b9db]  bg-[#5ad0f7]"
      >
        <div className="   flex items-center justify-center  h-full w-full duration-200 ">
          <div className="">
            <IoIosArrowForward className="text-gray-700 rotate-180 size-7" />
          </div>
        </div>
      </div>
      <div className=" w-10/12">
        <div className="w-full  bg-[#f9f9f9] h-full">
          <Slider
            ref={sliderRef}
            dots={false}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={false}
            autoplaySpeed={6000}
            speed={1000}
          >
            {slides.map((item, index) => (
              <div key={index} className=" w-full h-full ">
                <div className=" sm:flex pt-8 sm:pt-0  px-5  ">
                  <div className=" w-3/12   ">
                    <div className=" size-20 sm:w-full sm:h-full sm:rounded-none rounded-full overflow-hidden ">
                      <img
                        src={item.customerImg}
                        alt=""
                        className=" sm:mt-2 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="   w-full h-full p-5 ">
                    <img src={qouteImg} alt="" className="  " />
                    <div className=" flex items-center mt-3 gap-3  font-semibold">
                      <p>{item.commentTitle}</p>
                      <div className="flex items-center  ">
                        {Array.from({ length: 5 }, (_, index) =>
                          index < 5 ? (
                            <HiStar
                              key={index}
                              className="text-[#00b9f5] size-4"
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
                    <p className=" text-justify pr-5 text-sm text-gray-400 mt-3">
                      {item.comment}
                    </p>
                    <div className=" flex items-center mt-5">
                      <p className=" text-gray-800 font-semibold">
                        {item.customerName} -
                      </p>
                      <p className=" text-gray-600">{item.customerRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div
        onClick={handleNextSlide}
        className=" cursor-pointer w-1/12 z-10 flex items-center justify-center  duration-200 hover:bg-[#51b9db]  bg-[#5ad0f7]"
      >
        <div className="   flex items-center justify-center  h-full w-full duration-200 ">
          <div className="">
            <IoIosArrowForward className="text-gray-700  size-7" />
          </div>
        </div>
      </div>
    </div>
  );
}
