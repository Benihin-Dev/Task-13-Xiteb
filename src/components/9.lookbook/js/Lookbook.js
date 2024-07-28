import React, { useState } from "react";
import SliderForLookBook from "./SliderForLookBook";
import bannerImg from "../img/banner-10.jpg";
import productImg1 from "../img/p-01.jpg";
import productImg2 from "../img/p-02.jpg";
import productImg3 from "../img/p-03.jpg";
import productImg4 from "../img/p-04.jpg";
import productImg5 from "../img/p-01.jpg";
import productImg6 from "../img/p-03.jpg";
import productImg7 from "../img/p-04.jpg";
import productImg8 from "../img/p-05.jpg";
import productImg9 from "../img/p-06.jpg";
import productImg10 from "../img/p-07.jpg";
import productImg11 from "../img/p-08.jpg";
import productImg12 from "../img/p-09.jpg";
import TempletForProducrPreview from "./TempletForProducrPreview";

export default function Lookbook() {
  const lookBookSliderProductDetails = [
    {
      img: productImg1,
      title: "Jacket",
      rating: { rate: 5, reviews: 125 },
      price: 254.0,
      discount: false,
      newProduct: false,
      availableColors: ["red", "pink", "cyan"],
    },
    {
      img: productImg2,
      title: "Sneakers",
      rating: { rate: 5, reviews: 80 },
      price: 120.0,
      discount: true,
      newProduct: true,
      availableColors: ["black", "white", "grey"],
    },
    {
      img: productImg3,
      title: "Backpack",
      rating: { rate: 4, reviews: 60 },
      price: 75.0,
      discount: false,
      newProduct: true,
      availableColors: ["blue", "green", "yellow"],
    },
    {
      img: productImg4,
      title: "T-Shirt",
      rating: { rate: 3, reviews: 40 },
      price: 50.0,
      discount: true,
      newProduct: false,
      availableColors: ["black", "brown", "grey"],
    },
    {
      img: productImg5,
      title: "HandBag",
      rating: { rate: 5, reviews: 150 },
      price: 300.0,
      discount: false,
      newProduct: true,
      availableColors: ["silver", "gold", "white"],
    },
  ];

  const productOnPictureData = [
    {
      img: productImg6,
      title: "Jacket",
      rating: { rate: 5, reviews: 125 },
      price: 254.0,
      discount: false,
      availableColors: ["red", "pink", "cyan"],
      position: { left: "57%", top: "12%" },
    },
    {
      img: productImg7,
      title: "Sneakers",
      rating: { rate: 5, reviews: 80 },
      price: 120.0,
      discount: true,
      availableColors: ["black", "white", "grey"],
      position: { left: "64%", top: "5%" },
    },
    {
      img: productImg8,
      title: "Backpack",
      rating: { rate: 4, reviews: 60 },
      price: 75.0,
      discount: false,
      availableColors: ["blue", "green", "yellow"],
      position: { left: "57%", top: "35%" },
    },
    {
      img: productImg9,
      title: "T-Shirt",
      rating: { rate: 3, reviews: 40 },
      price: 50.0,
      discount: true,
      availableColors: ["black", "brown", "grey"],
      position: { left: "32%", top: "52%" },
    },
    {
      img: productImg10,
      title: "HandBag",
      rating: { rate: 5, reviews: 150 },
      price: 300.0,
      discount: false,
      availableColors: ["silver", "gold", "white"],
      position: { left: "68%", top: "45%" },
    },
    {
      img: productImg11,
      title: "HandBag",
      rating: { rate: 5, reviews: 150 },
      price: 300.0,
      discount: false,
      availableColors: ["silver", "gold", "white"],
      position: { left: "62%", top: "68%" },
    },
    {
      img: productImg12,
      title: "HandBag",
      rating: { rate: 5, reviews: 150 },
      price: 300.0,
      discount: false,
      availableColors: ["silver", "gold", "white"],
      position: { left: "70%", top: "88%" },
    },
  ];

  const [inexOfPreviewProductOnPicture, setInexOfPreviewProductOnPicture] =
    useState(-1);
  return (
    <div className=" w-full relative py-10">
      <div className=" w-full px-5 sm:px-0 sm:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className=" w-full relative mb-10">
          <img src={bannerImg} alt="" className=" w-full object-cover" />
          <div className=" w-full h-full top-0 left-0 absolute ">
            <div className=" w-full h-full relative">
              {productOnPictureData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setInexOfPreviewProductOnPicture(index);
                  }}
                  className=" absolute left-[70%]  top-[88%] size-6 cursor-pointer border border-white text-white rounded-full  p-1 bg-black flex items-center justify-center"
                  style={{ left: item.position.left, top: item.position.top }}
                >
                  <p className="  w-fit font-semibold">+</p>
                </div>
              ))}
            </div>
          </div>
          {inexOfPreviewProductOnPicture !== -1 ? (
            <div className="  w-full h-full flex justify-center items-center top-0 left-0 absolute ">
              <div className={`  bg-[#ffffff] zoomIn shadow-md  mx-2  relative`}>
                <TempletForProducrPreview
                  item={productOnPictureData[inexOfPreviewProductOnPicture]}
                />
                <div
                  onClick={() => {
                    setInexOfPreviewProductOnPicture(-1);
                  }}
                  className=" absolute cursor-pointer hover:bg-red-400 duration-200  -top-5 -right-3 size-7 bg-black text-white flex items-center justify-center "
                >
                  <p className=" text-2xl rotate-45">+</p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="  w-full  ">
          <div className=" w-full overflow-hidden">
            <p className=" text-[#262626] text-3xl font-semibold pb-2">
              Lookbook 2024
            </p>
            <p className=" border-t-2 border-[#262626] px-6 w-fit pb-5"></p>
            <p className=" text-gray-500 text-sm text-justify pb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be, or randomised words which don't look even
              slightly believable. .
            </p>
            <SliderForLookBook data={lookBookSliderProductDetails} />
            <button className=" bg-[#262626] mt-8 text-white hover:bg-[#00b9f5] duration-200 text-sm   px-6 py-2 rounded-sm ">
              View All Products
            </button>
          </div>
        </div>
      </div>
      <div className=" absolute top-0 w-full h-full left-0 -z-10 bg-[#fff1d9] lg:bg-transparent">
        <div className=" h-1/2 w-full  "></div>
        <div className=" h-1/2 w-full bg-[#d1f3ff]"></div>
      </div>
    </div>
  );
}
