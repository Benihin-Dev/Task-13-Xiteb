import React from "react";
import menuImg1 from "../img/bg-banner1.jpg";
import menuImg2 from "../img/bg-banner2.jpg";
import menuImg3 from "../img/bg-banner3.jpg";

export default function Menu() {
  const menuData = [
    {
      img: menuImg1,
      textSection: (
        <>
          <p className=" rounded-full px-3 py-1 bg-[#12a05c] text-xs w-fit text-white ">
            NEW
          </p>
          <p className=" w-full sm:w-1/2 font-semibold text-2xl my-3 text-[#66bc89]">
            Vaprorizer Charger X200 5KW
          </p>
        </>
      ),
      btnText: "More",
    },
    {
      img: menuImg2,
      textSection: (
        <>
          <p className=" w-full sm:w-1/2 font-semibold text-2xl  text-[#66bc89]">
            Digital Thermometer X30-Pro
          </p>
          <p className="  text-4xl font-semibold text-[#103178] my-3 ">-10%</p>
        </>
      ),
      btnText: "Shop Now",
    },
    {
      img: menuImg3,
      textSection: (
        <>
          <p className=" w-full sm:w-1/2 font-semibold text-2xl text-[#66bc89]">
            SuperBrush X200 Higenic
          </p>
          <p className="  text-4xl font-semibold text-[#103178] mt-3 ">
            $119.50
          </p>
          <p className="  text-lg line-through pb-2 text-[#a1a3a7]   ">
            $129.50
          </p>
        </>
      ),
      btnText: "Shop Now",
    },
  ];
  return (
    <div className=" w-full py-10 sm:px-10">
      <div className=" w-full md:grid grid-cols-3 gap-5">
        {menuData.map((item, index) => (
          <div key={index} className=" w-full rounded-sm overflow-hidden group relative">
            <img
              src={item.img}
              className=" w-full object-cover group-hover:scale-110 duration-500"
              alt=""
            />
            <div className=" w-full cursor-default h-full absolute top-0 left-0 p-5 flex items-center">
              <div>
                {item.textSection}
                <button className=" text-white bg-[#66bc89] duration-200 hover:bg-[#103178] rounded-full px-7 py-2">
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
