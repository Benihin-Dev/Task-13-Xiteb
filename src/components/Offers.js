import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Offers() {
  const [cardContents, setCardConents] = useState([
    {
      img: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/2/9/%7B32926B10-8EE8-4639-B2DD-AC55F70CB76D%7Dslcwithbreakfast.jpg?w=360&h=175&mode=crop&quality=100&scale=both",
      memberExclusive: true,
      service: "Rooms & Suites",
      date: "",
      head: "Shangri–La Circle Member with Breakfast",
      desc: "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
      price: "INR 14,907.60",
    },
    {
      img: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/8/B/%7BA8B2E679-6D4A-497F-95C4-A905821952F5%7Dslcmemberrate.jpg?w=360&h=175&mode=crop&quality=100&scale=both",
      memberExclusive: true,
      service: "Rooms & Suites",
      date: "",
      head: "Shangri–La Circle Exclusive Member Rate",
      desc: "Exclusive Member Rate for our newest Shangri-La Circle member.",
      price: "INR 13,251.20",
    },
    {
      img: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/1/C/9/%7B1C910601-8658-4066-9DBC-6BB50D7DA162%7DCentral4.jpg?w=360&h=175&mode=crop&quality=100&scale=both",
      memberExclusive: false,
      service: "Dining",
      date: "03 Jan 2024 - 31 Dec 2024",
      head: "Weekend Brunch at Central Park",
      desc: "A global gastronomic journey awaits you with our Weekend brunch at Central.",
      price: "",
    },
  ]);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`animated-component ${
        inView ? "is-visible" : ""
      } w-11/12 lg:w-10/12 mx-auto `}
    >
      <h1 className=" text-3xl sm:text-2xl w-full text-center font-medium text-gray-700">
        Offers
      </h1>
      <div
        className={`
       hidden sm:grid mt-10 w-full  grid-cols-3 gap-7`}
      >
        {cardContents.map((item, index) => (
          <div
            key={index}
            className=" border shadow-sm hover:shadow-lg hover:shadow-gray-300 duration-200  hover:border-gray-200 rounded relative"
          >
            <img src={item.img} className=" w-full" alt="" />
            <p className=" w-full text-center text-xs font-medium mt-1 text-gray-900">
              {item.service}
            </p>
            <p className=" w-full text-center text-xs font-medium mt-1 text-gray-900">
              {item.date}
            </p>
            <p className=" w-full text-center px-5 text-[16px] leading-4 mt-8">
              {item.head}
            </p>
            <p className=" w-full text-center px-5 text-[13px] text-gray-500 leading-4 mt-2">
              {item.desc}
            </p>
            <p
              className={`${
                index === 2 ? " text-transparent" : ""
              } w-full text-center px-5 text-sm   text-gray-900 leading-4 mt-20`}
            >
              From <span className=" font-medium">{item.price}</span> Average
              Per Night
            </p>
            <div className=" w-full flex justify-center items-center">
              <button className="  duration-200  mb-4 mt-2 py-1 text-sm rounded-sm border-[#a68a3a] border  px-4 hover:text-white hover:bg-[#a68a3a]">
                View Details
              </button>
            </div>
            <div
              className={`${
                item.memberExclusive === true ? " flex" : "hidden"
              } absolute top-3 text-xs  w-full  z-10 right-0  justify-end`}
            >
              <p className="px-2 py-1 memberExclusive bg-[#ffffffbc]">
                Member Exclusive
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        ref={ref}
        className={`animated-component ${inView ? "is-visible" : ""}
      sm:hidden mt-10 mb-24 flex relative overflow-x-scroll overflow-y-hidden h-[110vw] pb-5`}
      >
        <div className=" absolute overflow-hidden top-0 gap-4 flex">
          {cardContents.map((item, index) => (
            <div
              key={index}
              className=" border shadow-sm hover:shadow-lg border-gray-3    00 rounded relative w-[80vw] "
            >
              <img src={item.img} className=" w-full" alt="" />
              <p className=" w-full text-center text-xs font-medium mt-1 text-gray-900">
                {item.service}
              </p>
              <p className=" w-full text-center text-xs font-medium mt-1 text-gray-900">
                {item.date}
              </p>
              <p className=" w-full text-center px-5 text-[16px] leading-4 mt-8">
                {item.head}
              </p>
              <p className=" w-full text-center px-5 text-[13px] text-gray-500 leading-4 mt-2">
                {item.desc}
              </p>
              <p
                className={`${
                  index === 2 ? " text-transparent" : ""
                } w-full text-center px-5 text-sm   text-gray-900 leading-4 mt-20`}
              >
                From <span className=" font-medium">{item.price}</span> Average
                Per Night
              </p>
              <div className=" w-full flex justify-center items-center">
                <button className=" mb-4 mt-2 py-1 text-sm rounded-sm border-[#a68a3a] duration-200 border  px-4 hover:text-white hover:bg-[#a68a3a]">
                  View Details
                </button>
              </div>
              <div
                className={`${
                  item.memberExclusive === true ? " flex" : "hidden"
                } absolute top-3 text-xs  w-full  z-10 right-0  justify-end`}
              >
                <p className="px-2 py-1 memberExclusive bg-[#ffffffbc]">
                  Member Exclusive
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-10/12  mx-auto shadow-md h-3 rotate-180 mt-0 sm:mt-16"></div>
    </div>
  );
}
