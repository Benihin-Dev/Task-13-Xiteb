import React from "react";
import image from "../assets/img/organicBg.png";
import { GiLipstick } from "react-icons/gi";
import { PiPlant } from "react-icons/pi";
import { MdPets } from "react-icons/md";
import { SiMoleculer } from "react-icons/si";
import sideImg from "../assets/img/3.png";
import { useInView } from "react-intersection-observer";

export default function Organic() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const organic = [
    {
      head: "TOXINS FREE",
      decs: "Inspired by apothecary know-how, we always strive to source ingredients",
      logo: <GiLipstick className=" size-full p-2 text-gray-200" />,
    },
    {
      head: "ONLY ORGANIC",
      decs: "Inspired by apothecary know-how, we always strive to source ingredients",
      logo: <PiPlant className=" size-full p-2  text-gray-200" />,
    },
    {
      head: "NOT ANIMAL TESTED",
      decs: "Inspired by apothecary know-how, we always strive to source ingredients",
      logo: <MdPets className=" size-full p-2  text-gray-200" />,
    },
    {
      head: "CLINICAL TESTED",
      decs: "Inspired by apothecary know-how, we always strive to source ingredients",
      logo: <SiMoleculer className=" size-full p-2  text-gray-200" />,
    },
  ];
  return (
    <div className=" w-full   relative bg-[#2c2c2c]">
      <div className=" sm:flex justify-center">
        <div className=" hidden sm:block w-1/2 relative">
          <div className="    absolute top-0 left-0 right-0 bottom-0">
            <img src={image} alt="" className="  w-full h-full object-cover" />
          </div>
        </div>
        <div className=" sm:w-1/2  px-4 py-8 sm:p-8">
          <div className=" p-5 w-full relative ">
            <p className=" font-allura text-[#3c3c3c]  mb-5 text-6xl lg:text-8xl">
              ProduTs
            </p>
            <p className="  absolute left-0 top-[50%] px-3  text-white text-3xl w-full sm:w-4/5 leading-7 ">
              WE CREATE ONLY ORGANIC COSMETICS
            </p>
            <p className=" px-8 hidden sm:block sm:mt-10  border-[#ffffff] border-b-2 w-fit"></p>
          </div>
          <div className="  text-white grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mt-16 sm:mt-16">
            {organic.map((item, index) => (
              <div
                key={index}
                className="   w-full flex  items-start justify-center gap-0"
              >
                <div className="w-4/12    relative">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" size-20    absolute left-0 top-0"
                  >
                    <path
                      fill="#3c3c3c"
                      d="M41,-31.8C54.9,-15.3,69.1,1.9,68.2,19.5C67.3,37.1,51.3,55.3,31.5,64.5C11.6,73.7,-12.1,74.1,-31.5,64.9C-51,55.8,-66.1,37.2,-69.6,17.2C-73.1,-2.7,-64.9,-24,-51.4,-40.4C-37.9,-56.8,-18.9,-68.2,-2.7,-66.1C13.6,-64,27.1,-48.2,41,-31.8Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                  <div className=" absolute top-3 right-2 size-16  ">
                    {item.logo}
                  </div>
                </div>
                <div className=" w-8/12 p-2 z-10 ">
                  <p className=" text-lg text-white ">{item.head}</p>
                  <p className=" text-xs text-gray-100 mt-3">{item.decs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" sm:hidden block ">
          <img src={image} alt="" className=" w-full h-[40vh] object-cover" />
        </div>
      </div>
      <div
        ref={ref}
        className={`animated-componentFromRight ${
          inView ? "is-visible" : ""
        } absolute bottom-[92%]  sm:bottom-[70%] left-[60%] sm:left-[80%] rotate-90  sm:w-[30vw] w-[50vw] `}
      >
        <img
          src={sideImg}
          alt=""
          className=" size-full object-contain  rotate-180 "
        />
      </div>
    </div>
  );
}
