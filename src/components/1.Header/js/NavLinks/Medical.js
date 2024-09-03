import React from "react";
import Timer from "../../../assets/js/Timer";
import ProductTemplet from "../../../assets/js/ProductTemplet";

export default function Medical({ details }) {
  return (
    <div className=" w-full px-5 md:px-10 py-10 bg-white">
      <div className=" grid grid-cols-4 gap-5">
        <div className="row-span-2">
          {details.links.map((link, i) => (
            <p
              key={i}
              className=" text-[#66bc89] font-semibold cursor-pointer duration-200 hover:text-[#103178] pt-1"
            >
              {link}
            </p>
          ))}
        </div>
        <div className=" relative  col-span-2 group  rounded-md  overflow-hidden">
          <img
            src={details.banner1.img}
            className=" w-full object-cover group-hover:scale-110 duration-500"
            alt=""
          />
          <div className=" absolute pl-10 h-full top-0 left-0 w-4/5 lg:w-3/5 flex items-center justify-start">
            <div className="">
              <p className=" text-white rounded-full py-[5px] px-4 cursor-default bg-[#12a05c] w-fit text-xs">
                NEW
              </p>
              <p className=" text-[#66bc89] cursor-default font-semibold text-xl lg:text-3xl mt-3">
                {details.banner1.text}
              </p>
              <button className=" bg-[#66bc89] mt-2 lg:mt-5 rounded-full text-white duration-300 py-[7px] px-9 hover:bg-[#103178]">
                {details.banner1.btnText}
              </button>
            </div>
          </div>
        </div>
        <div className="row-span-2 h-full border-[3px] py-5 rounded flex items-center justify-center  border-[#103178] ">
          <div>
            <Timer
              endDate={new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)}
            />
            <ProductTemplet productDetails={details.productDetails} />
          </div>
        </div>
        <div className=" relative  col-span-2  group  rounded-md  overflow-hidden">
          <img
            src={details.banner2.img}
            className=" w-full object-cover group-hover:scale-110 duration-500"
            alt=""
          />
          <div className=" absolute pl-10 h-full top-0 left-0 w-4/5 lg:w-3/5  flex items-center justify-start">
            <div className="">
              <p className=" text-[#66bc89] cursor-default font-semibold text-xl lg:text-3xl mt-3">
                {details.banner2.text}
              </p>
              <p className=" text-4xl mt-3 font-bold text-[#103178]">
                {details.banner2.suBText}
              </p>
              <button className=" bg-[#66bc89]  mt-2 lg:mt-5 rounded-full text-white duration-300 py-[7px] px-9 hover:bg-[#103178]">
                {details.banner2.btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
