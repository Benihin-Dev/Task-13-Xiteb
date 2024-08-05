import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { PiCopyLight } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function SliderForBannerProducts({ data }) {
  const slides = data.map((item) => item);
  const sliderRef = useRef(null);

  function formatPrice(price) {
    const [integerPart, decimalPart] = price.toFixed(2).split(".");
    return { integerPart, decimalPart };
  }

  const PriceComponent = (price) => {
    const { integerPart, decimalPart } = formatPrice(price);

    return (
      <>
        <p className="text-4xl">{integerPart} </p>
        <p className=" text-2xl">{decimalPart}</p>
      </>
    );
  };

  return (
    <div className={` w-full `}>
      <div className=" flex items-center pt-4  pb-2 justify-center relative">
        <div className=" w-full p-5">
          <div className="w-full h-full bg-transparent   ">
            <Slider
              ref={sliderRef}
              dots={true}
              infinite={true}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={6000}
              speed={1000}
            >
              {slides.map((item, index) => (
                <div key={index} className=" w-full px-2 sm:px-4">
                  <div className=" ml-auto w-full lg:w-3/4 pt-10 text-gray-600  md:flex items-center justify-between gap-5">
                    <div className=" md:w-1/2 sm:pl-5">
                      <p className=" cursor-default text-5xl ">
                        {item.saleText}
                      </p>
                      <p className=" cursor-default text-xs font-bold mt-1 ">
                        UNDER FAVORABLE SMARTWATCHES
                      </p>
                      <div className=" mt-5 cursor-default">
                        <p className=" text-xs">FROM</p>
                        <div className=" flex items-start  font-semibold">
                          <p className=" text-2xl ">$</p>
                          {PriceComponent(item.price)}
                        </div>
                        <button className=" px-10 py-2 rounded-md text-white bg-[#e6154b] hover:bg-[#dc3964] text-sm mt-3">
                          Buy Now
                        </button>
                      </div>
                    </div>
                    <div className=" w-full md:w-1/2">
                      <img src={item.img} className=" w-full" alt="" />
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
