import React from "react";
import featureImg1 from "../img/fx_feature_1.png";
import featureImg2 from "../img/fx_feature_2.png";
import featureImg3 from "../img/fx_feature_3.png";

export default function Featured() {
  const data = [
    {
      img: featureImg1,
      titile: "Expert Chef",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit amet, consectetur sed do eiusmod",
    },
    {
      img: featureImg2,
      titile: "Delicious Recipes",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit amet, consectetur sed do eiusmod",
    },
    {
      img: featureImg3,
      titile: "Home Delivery",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit amet, consectetur sed do eiusmod",
    },
  ];
  return (
    <div className=" w-full relative sm:py-32 py-20  bg-[#f1fbff] ">
      <div className="responsiveWeith grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {data.map((item, index) => (
          <div
            key={index}
            className={` ${
              index === 1
                ? " border-[#c41f3a]"
                : "border-transparent hover:border-[#c41f3a] "
            } w-full px-5  py-8 gap-5 sm:gap-3 lg:gap-5 flex items-center  border-[3px] duration-500  border-dashed `}
          >
            <img src={item.img} className=" size-20 sm:size-32" alt="" />
            <div className=" w-full">
              <p className=" duration-200 cursor-pointer hover:text-[#c41f3a] text-xl md:text-3xl font-medium pb-2 ">
                {item.titile}
              </p>
              <p className="text-[#595b5b]  sm:text-lg cursor-default">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
