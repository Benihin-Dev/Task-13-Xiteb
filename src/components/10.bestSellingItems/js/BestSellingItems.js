import React from "react";
import titleImg from "../img/diamond.png";
import productImg1 from "../img/p-01.jpg";
import productImg2 from "../img/p-02.jpg";
import productImg3 from "../img/p-03.jpg";
import productImg4 from "../img/p-04.jpg";
import productImg5 from "../img/p-05.jpg";
import SliderForProducts from "../../productSlider/js/SliderForProducts";

export default function BestSellingItems() {
  const bestSellingItemsDetails = [
    {
      img: productImg1,
      title: "Jacket",
      rating: { rate: 5, reviews: 125 },
      price: 254.0,
      discount: false,
      availableColors: ["red", "pink", "cyan"],
    },
    {
      img: productImg2,
      title: "Sneakers",
      rating: { rate: 5, reviews: 80 },
      price: 120.0,
      discount: true,
      availableColors: ["black", "white", "grey"],
    },
    {
      img: productImg3,
      title: "Backpack",
      rating: { rate: 4, reviews: 60 },
      price: 75.0,
      discount: false,
      availableColors: ["blue", "green", "yellow"],
    },
    {
      img: productImg4,
      title: "T-Shirt",
      rating: { rate: 3, reviews: 40 },
      price: 50.0,
      discount: true,
      availableColors: ["black", "brown", "grey"],
    },
    {
      img: productImg5,
      title: "HandBag",
      rating: { rate: 5, reviews: 150 },
      price: 300.0,
      discount: false,
      availableColors: ["silver", "gold", "white"],
    },
  ];
  return (
    <div className=" w-full relative py-20 mt-10">
      <div className=" w-full px-5 sm:px-0 mx-auto sm:w-10/12">
        <h1 className=" text-4xl font-semibold w-full text-center px-5 text-[#212529]">
          Featured Collections
        </h1>
        <div className=" w-full flex items-center justify-center mt-2">
          <img src={titleImg} alt="titleImg" />
        </div>
        <p className=" w-full text-center px-10 text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor.
        </p>
        <SliderForProducts data={bestSellingItemsDetails} />
        <div className=" w-full flex items-center justify-center mt-10 ">
          <button className=" bg-[#262626] text-white hover:bg-[#00b9f5] duration-200 text-sm   px-6 py-2 rounded-sm ">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}
