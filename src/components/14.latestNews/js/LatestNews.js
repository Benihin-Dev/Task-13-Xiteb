import React from "react";
import titleImg from "../img/diamond.png";
import newsImg1 from "../img/news-01.jpg";
import newsImg2 from "../img/news-02.jpg";
import newsImg3 from "../img/news-03.jpg";
import SliderForLatestNews from "./SliderForLatestNews";

export default function LatestNews() {
  const dataForNews = [
    {
      img: newsImg1,
      title: "Contrary to popular belief",
      news: "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure amet quae numquam?",
      date: "15",
      month: "dec",
    },
    {
      img: newsImg2,
      title: "Contrary to popular belief",
      news: "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure amet quae numquam?",
      date: "29",
      month: "aug",
    },
    {
      img: newsImg3,
      title: "Contrary to popular belief",
      news: "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure amet quae numquam?",
      date: "05",
      month: "nov",
    },
    {
      img: newsImg1,
      title: "Contrary to popular belief",
      news: "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure amet quae numquam?",
      date: "08",
      month: "jan",
    },
    {
      img: newsImg2,
      title: "Contrary to popular belief",
      news: "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure amet quae numquam?",
      date: "19",
      month: "jul",
    },
    {
      img: newsImg3,
      title: "Contrary to popular belief",
      news: "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure amet quae numquam?",
      date: "25",
      month: "may",
    },
  ];
  return (
    <div className=" w-full relative py-10">
      <div className=" w-full px-5 sm:px-0 mx-auto sm:w-10/12">
        <h1 className=" text-4xl font-semibold w-full text-center px-5 text-[#212529]">
          Our latest news & articles!
        </h1>
        <div className=" w-full flex items-center justify-center mt-2">
          <img src={titleImg} alt="titleImg" />
        </div>
        <p className=" w-full text-center px-10 text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor.
        </p>
        <SliderForLatestNews data={dataForNews} />
        {/* <SliderForProducts data={newArrivalProductDetails} /> */}
      </div>
      <div className=" w-full h-full absolute top-0 left-0  -z-10">
        <div className=" w-full h-1/2 bg-white"></div>
        <div className=" w-full h-1/2 bg-[#d1f3ff]"></div>
      </div>
    </div>
  );
}
