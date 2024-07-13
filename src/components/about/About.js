import React from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div className=" w-full relative pt-10 sm:pt-20 pb-20 ">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto">
        <div className=" w-full lg:flex items-center gap-10">
          <div className=" lg:w-1/2">
            <div className=" relative">
              <p className=" text-3xl mt-32 md:w-10/12">
                TAKE TIME FOR YOURSELF TODAY
              </p>
              <div className="    ">
                <p className=" w-fit mt-8 px-7 border-b-2 border-[#2c2c2cce] "></p>
              </div>
              <p className=" absolute top-[-14%] sm:top-[-25%] font-allura text-[#f4e4de]  -z-10 text-7xl lg:text-9xl">
                AbouT
              </p>
              <p className=" mt-8">
                Inspired by apothecary know-how, we always strive to source
                ingredients that respect the environment. We focus on quality to
                respect the skin, and priority is always given to those that are
                made in France.
              </p>
              <button className=" px-8 py-3 bg-[#2c2c2c] text-white duration-200 hover:bg-white hover:text-black border-[#2c2c2c] text-sm border shadow-md mt-5">
                LEARN MORE
              </button>
            </div>
          </div>
          <div
            ref={ref}
            className={`animated-componentFromRight ${
              inView ? "is-visible" : ""
            } lg:w-1/2 mt-16 lg:mt-0 flex items-center `}
          >
            <div className=" w-full h-full relative">
              <img
                src="https://wgl-dsites.net/nuage/wp-content/uploads/2021/07/img-1.png"
                alt=""
                className=" object-cover"
              />
              <div className=" absolute top-0 left-0 w-full h-full">
                <img
                  src="https://wgl-demo.net/nuage/wp-content/uploads/2021/07/img-2.png"
                  alt=""
                />
              </div>
              <div className=" absolute z-10 top-[50%] left-[60%] w-2/3 pl-10 h-full">
                <img
                  src="https://media.ulta.com/i/ulta/2595211_sm?w=1089&h=1089&fmt=auto"
                  alt=""
                  className=" object-contain -rotate-45"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
