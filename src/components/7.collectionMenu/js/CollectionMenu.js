import React from "react";
import bannerImg1 from "../img/banner-08.jpg";
import bannerImg2 from "../img/banner-09.jpg";

export default function CollectionMenu() {
  const data = [
    { img: bannerImg1, text: "Resort Mans Collections" },
    { img: bannerImg2, text: "New Womans Collections" },
  ];
  return (
    <div className=" w-full relative  py-12">
      <div className=" w-full px-5 sm:px-0 space-y-5 sm:space-y-0  sm:w-10/12 mx-auto sm:flex items-center justify-center gap-10">
        {data.map((item, index) => (
          <div key={index} className=" group  overflow-hidden  relative ">
            <img
              src={item.img}
              className=" group-hover:scale-110 w-full duration-300 object-cover"
              alt=""
            />
            <div className="  absolute top-0 left-0   w-full h-full flex items-end">
              <div className=" w-2/3">
                <div className=" pl-10">
                  <p className="text-3xl sm:text-2xl font-semibold lg:text-4xl mt-auto pb-2 lg:pb-6 cursor-default">
                    {item.text
                      .split(" ")
                      .map((word, i) =>
                        i === 1 ? <strong key={i}>{word} </strong> : `${word} `
                      )}
                  </p>
                  <button className=" bg-[#262626] hover:bg-[#00b9f5] duration-200 mb-3 lg:mb-7 text-white px-5 py-2 text-sm">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
