import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderForMiddleBanner({ data }) {
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
      {/* <div className=" absolute top-[50%] md:top-[90%] z-10 left-2 rounded-full text-gray-500 cursor-pointer  hover:text-white  p-[2px] bg-[#ffffff5c] hover:bg-[#2faf36]">
        <div className="  cursor-pointer flex items-center justify-center">
          <div className="  -rotate-180   " onClick={handlePrevSlide}>
            <MdKeyboardArrowRight className="size-3 md:size-5   duration-200 " />
          </div>
        </div>
      </div> */}
      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        slidesToShow={2}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={500}
        speed={5000}
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
          <div key={index} className=" px-1 md:px-5">
            <div className=" w-full border rounded-md overflow-hidden shadow-sm relative  hover:border-gray-400 duration-200">
              <img src={item.img} alt="" />
              <div className=" absolute top-0 left-0 w-full h-full p-4 flex items-end justify-end">
                <div className=" w-3/5 ">
                  <p className=" text-lg font-semibold font-montserrat leading-5">
                    {item.name}
                  </p>
                  <p className=" cursor-pointer hover:pl-2 duration-200 text-gray-500 hover:text-[#2faf36]">
                    Go to Supplier
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* <div className=" absolute top-[50%] md:top-[90%] z-10 right-2 rounded-full text-gray-500 cursor-pointer  hover:text-white  p-[2px] bg-[#ffffff5c] hover:bg-[#2faf36]">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <MdKeyboardArrowRight className="size-3 md:size-5  duration-200 " />
          </div>
        </div>
      </div> */}
    </div>
  );
}
