import React from "react";
import bannerImg1 from "../img/bg-banner4.jpg";
import bannerImg2 from "../img/bg-banner5.jpg";

export default function MiddleBanner() {
  const bannerData = [
    {
      img: bannerImg1,
      textSection: (
        <>
          <p className=" rounded-full px-3 py-1 bg-[#12a05c] text-xs w-fit text-white ">
            NEW
          </p>
          <p className=" w-full sm:w-1/2 font-semibold text-xl md:text-2xl my-3 text-[#66bc89]">
            Vaprorizer Charger X200 5KW
          </p>
        </>
      ),
      btnText: "More",
    },
    {
      img: bannerImg2,
      textSection: (
        <>
          <p className=" w-full sm:w-1/2 font-semibold text-xl md:text-2xl  text-[#66bc89]">
            Digital Thermometer X30-Pro
          </p>
          <p className="  text-xl md:text-4xl font-semibold text-[#103178] my-3 ">
            -10%
          </p>
        </>
      ),
      btnText: "Shop Now",
    },
  ];
  return (
    <div className=" w-full py-10 px-5 md:px-10">
      <div className=" w-full md:grid grid-cols-2 gap-10 space-y-4 md:space-y-0">
        {bannerData.map((item, index) => (
          <div
            key={index}
            className=" w-full rounded group cursor-pointer overflow-hidden relative"
          >
            <img
              src={item.img}
              alt=""
              className=" w-full object-cover group-hover:scale-110 duration-300 "
            />
            <div className=" absolute md:w-4/5 h-full top-0 left-0 pt-5 pl-5 flex items-center">
              <div>
                {item.textSection}
                <button className=" text-white bg-[#66bc89] text-sm duration-200 hover:bg-[#103178] rounded-full px-7 py-2">
                  {item.btnText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
