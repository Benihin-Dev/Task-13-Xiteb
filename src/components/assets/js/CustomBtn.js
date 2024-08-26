import React from "react";

export default function CustomBtn({ text }) {
  return (
    <div className=" mt-16 relative group z-0 rounded-md bg-[#c41f3a] overflow-hidden py-3 px-12 cursor-pointer font-medium w-fit text-white text-2xl ">
      {text}
      <div className=" w-full absolute top-0 left-0 h-full  -z-10  flex">
        <div className=" w-1/2 flex justify-start">
          <div className=" w-0 group-hover:w-full bg-[#333333] duration-500 h-full"></div>
        </div>
        <div className=" w-1/2 flex justify-end">
          <div className=" w-0 group-hover:w-full bg-[#333333] duration-500 h-full"></div>
        </div>
      </div>
    </div>
  );
}
