import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiStar } from "react-icons/hi2";

export default function SliderForTestimonial({ data }) {
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
    <div className={` w-full h-full  relative   pt-10 pb-6`}>
      {/* <div className=" absolute  top-[45%] size-10 flex items-center justify-center z-10 left-1 sm:-left-2 rounded-full text-white cursor-pointer  hover:bg-[#c7c7c7]   bg-[#b5b5b56c]  ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handlePrevSlide}>
            <IoIosArrowBack className="size-8 sm:size-7  duration-200 " />
          </div>
        </div>
      </div> */}

      <Slider
        ref={sliderRef}
        dots={true}
        infinite={true}
        slidesToShow={4.5}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={6000}
        speed={500}
        dotsClass="slick-dots custom-dots top-[100%] "
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
              slidesToShow: 4,
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
          <div key={index} className=" relative px-3 ">
            <div className=" w-full bg-white  rounded overflow-hidden cursor-default mt-5 mb-10 p-5 text-[#66bc89] ">
              <p className=" font-light">{item.comment}</p>
              <p className=" font-semibold py-4 ">{item.name}</p>
              <div className=" flex">
                {Array.from({ length: 5 }, (_, index) =>
                  index < item.rating ? (
                    <HiStar
                      key={index}
                      className="text-[#103178] size-[15px]"
                    />
                  ) : (
                    <HiStar
                      key={index}
                      className="text-gray-300  size-[15px]"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* <div className=" absolute  top-[45%] size-10 flex items-center justify-center z-10 right-1 sm:-right-2 rounded-full text-white cursor-pointer  hover:bg-[#c7c7c7]   bg-[#b5b5b56c]  ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <IoIosArrowBack className="size-8 sm:size-7 rotate-180  duration-200 " />
          </div>
        </div>
      </div> */}
    </div>
  );
}
