import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductTemplet from "../../4.PopulerProduct.js/js/ProductTemplet";

export default function SliderForProduct({ data }) {
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
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={6000}
        speed={500}
      >
        {slides.map((item, index) => (
          <ProductTemplet productData={item} key={index} />
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
