import React from "react";
import catImg1 from "../img/dental-cat.png";
import catImg2 from "../img/facemask-cat.png";
import catImg3 from "../img/pressure-cat.png";
import catImg4 from "../img/protectcover-cat.png";
import catImg5 from "../img/uniforms-cat.png";

export default function PopularCategory() {
  const categoryData = [
    { img: catImg2, name: "Face Mask" },
    { img: catImg5, name: "Uniforms" },
    { img: catImg4, name: "Productive Covers" },
    { img: catImg1, name: "Dental" },
    { img: catImg3, name: "Blood Pressure" },
  ];
  return (
    <div className=" w-full px-5 sm:px-8 py-10">
      <div className=" grid w-full gap-1 grid-cols-2 md:grid-cols-4 lg:grid-cols-9">
        {categoryData.map((item, index) => (
          <div
            key={index}
            className={` w-full cursor-pointer ${
              index === 1 ? "" : "sm:col-span-2 "
            } border rounded-sm  bg-[#f0f2f5] hover:border-[#b2b3b5] duration-300 overflow-hidden`}
          >
            <div className="p-5">
              <p className=" font-semibold  text-[#66bc89]  h-12 leading-5 text-xl">
                {item.name}
              </p>
              <button className=" mt-0 text-[#66bc89] hover:text-white bg-white hover:bg-[#66bc89] duration-300 px-5 py-1 rounded-full text-sm">
                More
              </button>
            </div>
            <div className=" w-full flex items-end justify-end h-32 sm:h-40  ">
              <img src={item.img} className="   object-contain" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
