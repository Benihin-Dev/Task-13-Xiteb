import React from "react";
import quotationImg from "../img/quotation.png";

export default function Templet({ data }) {
  return (
    <div className=" border relative mt-10 bg-white text-gray-800 rounded-sm shadow shadow-[#80808061] cursor-default">
      <div className=" absolute -top-16 right-0 w-full left-0   flex items-center justify-center">
        <img src={data.img} className=" w-32" alt="" />
      </div>

      <p className=" text-center mt-20 text-xl">🌟🌟🌟🌟🌟</p>
      <div className="relative z-10  text-center px-4 md:px-8 lg:px-10 text-[21px]  font-[500] text-gray-700 leading-8 mt-5">
        {data.comment}
        <div className=" absolute top-[30%] md:top-[15%] right-0 w-full left-0  -z-10  flex items-center justify-center">
          <img src={quotationImg} className=" w-32 object-cover" alt="" />
        </div>
      </div>
      <p className=" uppercase text-center text-2xl mt-5   font-medium ">
        {data.name}
      </p>
      <p className=" text-xl text-center pb-16">{data.position}</p>
    </div>
  );
}
