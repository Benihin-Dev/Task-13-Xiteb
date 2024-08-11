import React from "react";
import bannerImg1 from "../img/banner-16.png";
import bannerImg2 from "../img/banner-17.png";
import bannerImg3 from "../img/banner-18.png";
import bannerImg4 from "../img/banner-19.png";
import SliderForMiddleBanner from "../../Sliders/js/SliderForMiddleBanner";

export default function MiddleBanner() {
  const bannerData = [
    { name: "EveruOog Fresh Our Products", img: bannerImg1 },
    { name: "100% guaranteed Fresh items", img: bannerImg2 },
    { name: "Spacial Sale off this month", img: bannerImg3 },
    { name: "Enjog 15% OFF all Vegs and Fruit", img: bannerImg4 },
  ];
  return (
    <div className=" w-full relative py-10">
      <div className="responsiveWeith ">
        <div className=" hidden lg:grid grid-cols-2 md:grid-cols-4 gap-5">
          {bannerData.map((item, index) => (
            <div
              key={index}
              className=" w-full border rounded-md overflow-hidden border-gray-200 shadow-sm relative hover:border-gray-400 duration-200"
            >
              <img src={item.img} alt="" className=" w-full object-cover" />
              <div className=" absolute top-0 left-0 w-full h-full p-4 flex items-end justify-end">
                <div className=" w-3/5 ">
                  <p className=" cursor-default  font-semibold font-montserrat leading-5">
                    {item.name}
                  </p>
                  <p className=" text-sm cursor-pointer hover:pl-2 duration-200 text-gray-500 hover:text-[#2faf36]">
                    Go to Supplier
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" lg:hidden w-full">
          <SliderForMiddleBanner data={bannerData} />
        </div>
      </div>
    </div>
  );
}
