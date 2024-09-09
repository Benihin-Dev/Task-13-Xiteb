import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import shapeImg from "../../5.Delivery/img/blob.svg";
import img from "../img/image.png";
import { FiPhoneCall } from "react-icons/fi";
import { FaChartPie } from "react-icons/fa6";

export default function WeHateLate() {
  const imageSection = () => {
    return (
      <div className=" mt-10  md:mt-0 flex items-center justify-center relative">
        <img src={img} alt="" className=" px-10 py-10 object-contain z-20" />
        <img
          src={shapeImg}
          className=" absolute moving -top-8 z-10 object-contain w-[170%] left-0"
          alt=""
        />
        <div className=" w-full flex  left-10 movingOnY absolute z-20  top-[10%]  sm:top-[40%] ">
          <div className=" relative bg-white w-full sm:w-1/2 p-4 shadow-md flex items-center gap-3">
            <div className="w-1/3 flex items-center justify-center">
              <FiPhoneCall className="rotateDance size-8  text-[#ffa101]" />
            </div>
            <div className=" w-2/3">
              <p className="  font-thin text-lg w-full">CALL FOR ORDERS</p>
              <p className=" text-xl font-bold w-full">+1 234 5678</p>
            </div>
          </div>
        </div>
        <div className=" w-full flex  justify-center movingOnY1 delay-500 left-10  absolute z-20 top-[60%] ">
          <div className=" relative bg-white w-full sm:w-1/2 p-4 shadow-md flex items-center gap-3">
            <div className="w-1/3 flex items-center justify-center">
              <FaChartPie className="rotate2 size-10  text-[#ffa101]" />
            </div>
            <div className=" w-2/3">
              <p className="  font-thin text-lg w-full">BUY 1 PIZZA NOW</p>
              <p className=" text-xl font-bold w-full">GET I FREE</p>
            </div>
          </div>
        </div>
        <div className=" absolute bg-[#fdf6ec] bottom-0 left-0 top-[5%] border border-dashed border-[#ffa101] w-[120%]"></div>
      </div>
    );
  };
  return (
    <div className=" w-full py-20 relative bg-[#fdfbf9]">
      <div className=" responsiveWeith grid md:grid-cols-2">
        <div className=" md:hidden">{imageSection()}</div>
        <div className=" w-full mt-16 md:mt-0 sm:pr-5">
          <p className=" font-semibold text-4xl sm:text-6xl pb-5">
            We Hate Late!
          </p>
          <p className=" text-gray-500 text-2xl pb-5">
            Pizza delivery is a huge industry and Petuk is the most established
            company in this sector.
          </p>
          <p className=" font-thin text-gray-600 text-lg pt-4 pb-8">
            Due to our experience in this industry and our wide customer base,
            we are offering our customers a complete service.
          </p>
          <div className=" mt-4 space-y-4">
            <div className=" flex items-center gap-2">
              <IoMdCheckmarkCircle className=" size-6 text-green-500" />
              <p className=" text-lg text-gray-600">
                The let design still holding shudder
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <IoMdCheckmarkCircle className=" size-6 text-green-500" />
              <p className=" text-lg text-gray-600">
                Have himself quietly doubting to the its
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <IoMdCheckmarkCircle className=" size-6 text-green-500" />
              <p className=" text-lg text-gray-600">
                Parents started of with to college remember
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <IoMdCheckmarkCircle className=" size-6 text-green-500" />
              <p className=" text-lg text-gray-600">
                Have himself quietly doubting to the its to bear attentive
              </p>
            </div>
          </div>
        </div>
        <div className=" md:block hidden">{imageSection()}</div>

      </div>
    </div>
  );
}
