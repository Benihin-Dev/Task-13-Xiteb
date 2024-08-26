import React from "react";

export default function Hero() {
  return (
    <div className="w-full py-20 sm:py-40 bg-[#00000052] border-b">
      <div className="  bg-[#42363600] flex items-center">
        <div className="responsiveWeith ">
          <div className="  md:w-3/5 lg:w-1/2">
            <p className=" text-[#c41f3a] sm:text-xl   sm:pb-5 w-full sm:w-fit text-center sm:text-start">
              Your Are{" "}
              <span className=" text-white font-medium">Cordially Invited</span>{" "}
              To Ice Cream Shop...
            </p>
            <p className=" text-4xl sm:text-6xl sm:leading-[60px] text-white uppercase  w-full sm:w-fit text-center sm:text-start">
              get <span className="  text-[#c41f3a]">exciting</span> offer on{" "}
              <span className="  text-[#c41f3a]">our</span>food...
            </p>
            <p className=" mt-5 text-white    w-full sm:w-fit text-center sm:text-start">
              Quick, Delicious & Refreshing: Stock Up on Frozen Fun for Easy
              Summer Eats!
            </p>
            <div className="  mx-auto sm:mx-0 group cursor-pointer hover:text-[#c41f3b] duration-500 z-0 w-fit overflow-hidden relative bg-[#c41f3b] text-[#333333] py-2 sm:py-4 px-5 sm:px-10 sm:text-xl font-semibold rounded-md mt-5">
              EXPOLRE MORE
              <div className=" w-full absolute top-0 left-0 h-full  -z-10  flex">
                <div className=" w-1/2 flex justify-start">
                  <div className=" w-0 group-hover:w-full bg-[#333333] duration-500 h-full"></div>
                </div>
                <div className=" w-1/2 flex justify-end">
                  <div className=" w-0 group-hover:w-full bg-[#333333] duration-500 h-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
