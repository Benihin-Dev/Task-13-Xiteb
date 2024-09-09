import React from "react";
import menuImg1 from "../img/menu1.png";
import menuImg2 from "../img/menu2.png";
import menuImg3 from "../img/menu3.png";
import menuImg4 from "../img/menu4.png";
import { useInView } from "react-intersection-observer";

export default function TopSpacial() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const menuImg = [menuImg1, menuImg2, menuImg3, menuImg4];
  return (
    <div className=" w-full py-10 relative bg-[#fdfbf9]">
      <div
        ref={ref}
        className={`animated-component ${
          inView ? "is-visible" : ""
        } responsiveWeith `}
      >
        <p className=" text-3xl md:text-4xl w-full text-end font-semibold">
          Top Spacial Menu
        </p>
        <div className=" w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 gap-2 md:gap-3">
          {menuImg.map((img, index) => (
            <div
              key={index}
              className=" w-full cursor-pointer overflow-hidden shadow-sm border "
            >
              <img
                src={img}
                alt=""
                className=" h-full object-cover scale-105 hover:scale-100 duration-300 w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
