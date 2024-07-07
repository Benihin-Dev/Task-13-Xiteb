import React from "react";
import BgSlider from "./BgSlider";
import NavBar from "../navBar/NavBar";
import TextSection from "./TextSection";
import ImageSection from "./ImageSection";

export default function Hero() {
  return (
    <div className=" w-full  pb-10   bg-[#000000b0] relative overflow-hidden ">
      <NavBar />
      <div className=" w-full px-5 sm:px-10 md:px-0 md:w-11/12 mx-auto  md:flex gap-5">
        <TextSection />
        <ImageSection />
     
      </div>
      <div className="  w-full h-full absolute top-0 left-0  -z-10 bottom-0 right-0   ">
        <BgSlider />
      </div>
    </div>
  );
}
