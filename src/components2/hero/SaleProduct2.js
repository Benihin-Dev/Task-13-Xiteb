import React from "react";

export default function SaleProduct2() {
  return (
    <div className="slideFromRight absolute top-[60%] sm:top-[50%] left-[30%] sm:left-[20%] w-2/3 sm:w-1/3 md:w-2/5  lg:w-1/4 aspect-square   ">
      <div className=" size-full relative">
        <img
          src="https://wgl-demo.net/nuage/wp-content/uploads/2021/07/slider-img-3.png"
          alt=""
          className=" size-full object-contain"
        />
        <div className=" absolute bottom-[25%] z-20 right-[20%] sm:right-[20%]  size-7 sm:size-9  flex items-center justify-center">
          <div className=" size-full relative">
            <div className="main   size-full rounded-full cursor-pointer bg-[#2c2c2cd8] flex items-center justify-center  text-white duration-200    hover:rotate-45 left-[16%] sm:bottom-[10%] hover:bg-gray-50 hover:text-black">
              <p className="  text-lg sm:text-2xl ">+</p>
            </div>
            <div className=" sub  absolute top-[100%] left-0 h-full w-max  flex items-center">
              <p className=" text-black text-xs px-5 py-1 bg-[#ffffffb5] shadow-md rounded-sm">
                $10.00 Natural Brush
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
