import React from "react";
import bannerImg1 from "../img/banner-03.jpg";
import bannerImg2 from "../img/banner-04.jpg";
import bannerImg3 from "../img/banner-05.jpg";

export default function SaleItem() {
  const data = [
    {
      img: bannerImg1,
      name: "C-mount lenses",
      title: "ADLINK Smart Cameras",
      desc: "NEON-2000-JT2-X NVIDIA® AI",
    },
    {
      img: bannerImg2,
      name: "bluetooth speaker",
      title: "Portable Home Speaker",
      desc: "Wireless Speaker",
    },
    {
      img: bannerImg3,
      name: "2x USB-C 3.2, 6Gen",
      title: "Lenovo IdeaPad Slim 5i 14",
      desc: "Intel Raptor Lake CPUs",
    },
  ];
  return (
    <div className=" w-full relative py-10">
      <div className="responsiveWeith  grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {data.map((item, index) => (
          <div
            key={index}
            className=" cursor-pointer w-full  rounded-md overflow-hidden relative"
          >
            <img src={item.img} alt="" className=" w-full object-cover" />
            <div className=" absolute top-0 bottom-0 left-0 right-0 flex w-3/5 sm:w-4/5 lg:w-2/3 pt-5 px-5 items-end">
              <div className=" space-y-3">
                <p className=" w-fit text-sm text-white px-4 py-1 rounded bg-[#ffc107]">
                  {item.name}
                </p>
                <p className=" text-xl md:text-xl lg:text-2xl sm:text-3xl font-semibold pr-10 md:leading-4  leading-5">
                  {item.title}
                </p>
                <p className=" text-xs">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
