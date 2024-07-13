import React from "react";
import "./hero.css";
import SaleProduct1 from "./SaleProduct1";
import SaleProduct2 from "./SaleProduct2";
import SaleProduct3 from "./SaleProduct3";

export default function Hero() {
  return (
    <div className=" w-full bg-[#efe1cd] relative pt-52 sm:pt-40 pb-10">
      <div className=" py-24 md:py-20 w-10/12 sm:w-8/12 mx-auto z-10  relative">
        <p className=" zoomIn scale-110  cursor-default font-allura  text-7xl md:text-9xl w-full text-center text-white">
          beauTy
        </p>

        <div className=" cursor-default w-full text-center text-transparent">
          <p className=" cursor-default   w-full text-center  text-4xl md:text-6xl">
            PERFECT SKIN
          </p>
          We diversify for the extensive experience of work with different
          premises: interior for apartment, cottage design project,
          architecture, office design, cafes
        </div>
        <div className="absolute top-[28%] md:top-[36%] w-full mx-auto">
          <p className=" cursor-default  w-full text-center  text-4xl md:text-6xl">
            PERFECT SKIN
          </p>
          <div className=" flex items-center justify-center">
            <p className=" zoomOut w-fit px-5 border-b-2 border-[#847d73] mt-4">
              {" "}
            </p>
          </div>
          <p className=" cursor-default w-full text-sm sm:text-base text-center mt-7 sm:mt-5  ">
            We diversify for the extensive experience of work with different
            premises: interior for apartment, cottage design project,
            architecture, office design, cafes
          </p>
        </div>
        <div className=" w-full flex items-center justify-center mt-7 md:mt-10">
          <button className=" border text-sm border-black py-2 px-5 hover:bg-black hover:text-white duration-200">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="slideFromRight2 absolute h-full   top-0 right-[-40%] sm:right-[-20%] md:right-[-15%]  -z-0 ">
        <img
          src="https://wgl-demo.net/nuage/wp-content/uploads/2021/07/slider-img-5.png"
          alt=""
          className=" h-full object-cover"
        />
      </div>
      <SaleProduct1 />
      <SaleProduct2 />
      <SaleProduct3 />
    </div>
  );
}
