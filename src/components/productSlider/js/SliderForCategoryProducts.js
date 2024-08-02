import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { PiCopyLight } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";

export default function SliderForCategoryProducts({ data }) {
  const slides = data.data.map((item) => item);
  const sliderRef = useRef(null);

  return (
    <div className={` w-full  `}>
      <div className=" flex items-center  justify-center relative">
        <div className=" w-full p-5">
          <div className="w-full h-full bg-transparent   ">
            <Slider
              ref={sliderRef}
              dots={true}
              infinite={true}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={6000}
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
                <div key={index} className=" w-full sm:px-4">
                  <div className=" border p-5 relative group overflow-hidden rounded hover:shadow bg-[white] ">
                    <img src={item.img} className=" pb-4" alt="" />
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
                    <button className=" mb-3 mt-4 w-full text-sm px-5 py-2 rounded-md hover:text-white duration-300 border border-[#393939] hover:bg-[#393939] ">
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
