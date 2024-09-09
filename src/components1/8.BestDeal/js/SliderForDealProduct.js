import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import ProductTemplet from "../../assets/js/ProductTemplet";

export default function SliderForDealProduct({ data }) {
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
    <div className={` w-full h-full  relative  border  `}>
      <div className=" absolute  top-[45%] size-10 flex items-center justify-center z-10 left-1 sm:-left-2 rounded-full text-white cursor-pointer  hover:bg-[#c7c7c7]   bg-[#b5b5b56c]  ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handlePrevSlide}>
            <IoIosArrowBack className="size-8 sm:size-7  duration-200 " />
          </div>
        </div>
      </div>

      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        slidesToShow={5}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={6000}
        speed={500}
        dotsClass="slick-dots custom-dots top-[110%] "
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
          <div key={index} className=" relative border-l ">
            <ProductTemplet productDetails={item} />
            <div className=" size-[50px] absolute top-2 left-2 rounded-full bg-[#66bc89] flex items-center justify-center text-sm">
              <p className=" text-white"> {item.discount}</p>
            </div>
            <p className=" w-32 border-b mx-5 my-2"></p>
            <div className=" px-5 text-gray-800 text-xs leading-4 pb-8 flex items-start gap-2">
              <p>
                No of pcs <br /> Available
              </p>
              <p className=" font-semibold text-3xl text-[#66bc89]">
                {item.qty}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      <div className=" absolute  top-[45%] size-10 flex items-center justify-center z-10 right-1 sm:-right-2 rounded-full text-white cursor-pointer  hover:bg-[#c7c7c7]   bg-[#b5b5b56c]  ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <IoIosArrowBack className="size-8 sm:size-7 rotate-180  duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
}
