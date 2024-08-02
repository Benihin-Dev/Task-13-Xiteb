import React from "react";
import bannerImg1 from "../img/banner-06.jpg";
import bannerImg2 from "../img/banner-07.jpg";

export default function HotDeals() {
  const data = [
    {
      img: bannerImg1,
      name: "Hot Deals",
      title: "Motorola edge 30 Ultra",
      desc: "HIGHEST-RESOLUTION CAMERA",
    },
    {
      img: bannerImg2,
      name: "12th Generation",
      title: "Honor Magicbook-14 Laptop",
      desc: "5Wh High Capacity Battery",
    },
  ];
  return (
    <div className=" w-full relative py-10">
      <div className="responsiveWeith grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className=" w-full rounded-md overflow-hidden relative shadow  cursor-pointer"
          >
            <img src={item.img} className=" w-full" alt="" />
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
