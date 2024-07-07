import React from "react";

export default function TextSection() {
  return (
    <div className="slideFromLeft md:w-1/2  sm:pt-10 md:pt-0 lg:pt-20">
      <p className=" font-semibold text-5xl mt-10 pb-5 text-[#fff] cursor-default">
        Transform Your Passion into Success
      </p>
      <p className=" leading-5 text-[#ffe5e6] cursor-default">
        Explore Our Diverse Courses and Become a Leader in Your Field with
        Guidance from Industry Experts
      </p>
      <p className=" text-xs mt-5 text-gray-200 md:pr-16 cursor-default">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
        veritatis cupiditate voluptas quo aperiam ipsa nisi ducimus
        voluptatibus, quisquam unde ex amet esse deleniti veniam soluta
        voluptatum quia sunt deserunt.
      </p>
      <div className="  border my-3 w-full sm:w-9/12  rounded shadow-md text-sm flex">
        <input type="text" className=" px-3  pt-3 pb-1 outline-none   w-7/12" />
        <button className=" w-5/12 py-2 sm:py-3 bg-[#756ab6] hover:bg-[#4534a9] duration-200 px-3  text-white">
          Find You Course
        </button>
      </div>
    </div>
  );
}
