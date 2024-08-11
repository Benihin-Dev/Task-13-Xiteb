import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import bannerImg1 from "../img/banner-5.png";
import bannerImg2 from "../img/banner-6.png";
import bannerImg3 from "../img/banner-7.png";
import bannerImg4 from "../img/banner-8.png";
import ProductTempletForDealOfTheDay from "./ProductTempletForDealOfTheDay";
import SliderForDealOfTheDayProduct from "../../Sliders/js/SliderForDealOfTheDayProduct";

export default function DealOfTheDay() {
  const dataForDealOfTheDay = [
    {
      title: "Mom's Superfood MIX",
      img: bannerImg1,
      rating: 4,
      review: 35,
      manufacture: "Food",
      actualPrice: 32.85,
      discountedPrice: 30.0,
      dealEndDate: new Date(2025, 2, 8, 1, 8),
    },
    {
      title: "Smoked Honey Sptced",
      img: bannerImg2,
      rating: 5,
      review: 135,
      manufacture: "Old El Paso",
      actualPrice: 24.5,
      discountedPrice: 40.8,
      dealEndDate: new Date(2025, 4, 17, 11, 8),
    },
    {
      title: "Wood—Fred Mushroom",
      img: bannerImg3,
      rating: 4,
      review: 552,
      manufacture: "Progresso",
      actualPrice: 70.25,
      discountedPrice: 65.25,
      dealEndDate: new Date(2024, 12, 31, 6, 4),
    },
    {
      title: "Simplu Lemonade Raspb«ry",
      img: bannerImg4,
      rating: 3,
      review: 43,
      manufacture: "Yoplait",
      actualPrice: 152.75,
      discountedPrice: 140.0,
      dealEndDate: new Date(2025, 8, 10, 10, 8),
    },
  ];

  return (
    <div className=" w-full relative py-10 ">
      <div className="responsiveWeith">
        <div className=" w-full flex gap-10 justify-between">
          <p className=" text-2xl md:text-3xl font-semibold cursor-default font-montserrat">
            Deal Of The Day
          </p>
          <div className=" flex items-center gap-1 text-gray-400 text-sm hover:text-black duration-200 cursor-pointer">
            <p>All Deals</p>
            <IoIosArrowForward />
          </div>
        </div>
        <div className=" hidden lg:grid w-full grid-cols-4 gap-5 mt-10 mb-20">
          {dataForDealOfTheDay.map((item, index) => (
            <ProductTempletForDealOfTheDay item={item} key={index} />
          ))}
        </div>
        <div className=" lg:hidden w-full">
          <SliderForDealOfTheDayProduct data={dataForDealOfTheDay} />
        </div>
      </div>
    </div>
  );
}
