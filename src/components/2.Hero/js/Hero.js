import React from "react";
import HeroContent from "./HeroContent";
import pizzaImg1 from "../img/pizza (2).png";
import pizzaImg2 from "../img/pizza.png";

import { PiTriangleThin } from "react-icons/pi";
import { GiCircle } from "react-icons/gi";

export default function Hero() {
  return (
    <div className=" relative">
      <div className=" z-10">
        <HeroContent />
      </div>
      <div className=" -z-10 bg-[#fbf3e5] absolute w-full h-full top-0 left-0">
        <div className=" w-full h-full relative">
          <img
            src={pizzaImg2}
            className=" w-32 absolute top-[10%] left-[5%] moving {
"
            alt=""
          />
          <img
            src={pizzaImg1}
            className=" w-48 absolute top-[30%] left-[85%] reverceRotate {
"
            alt=""
          />
          <PiTriangleThin className=" top-[30%] left-[4%] absolute size-12 text-gray-300 reverceRotate" />
          <PiTriangleThin className=" top-[50%] left-[50%] absolute size-16 text-gray-300 moving" />
          <GiCircle className=" top-[35%] left-[10%] absolute size-16 text-[#edb09236] movingOnX" />
          <GiCircle className=" top-[80%] left-[90%] absolute size-16 text-[#edb09243] movingOnX" />
          <GiCircle className=" top-[10%] left-[80%] absolute size-16 text-[#66676c4b] scaleUp" />
        </div>
      </div>
    </div>
  );
}
