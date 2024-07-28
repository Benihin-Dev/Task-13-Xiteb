import React, { useState } from "react";
import titleImg from "../img/diamond.png";
import productImg1 from "../img/p-08.jpg";
import productImg2 from "../img/p-10.jpg";
import productImg3 from "../img/p-12.jpg";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { GrPowerCycle } from "react-icons/gr";
import { GoZoomIn } from "react-icons/go";
import { HiShoppingCart } from "react-icons/hi2";

export default function TrendingProducts() {
  const trendingProductsDetails = [
    {
      img: "https://themes.xcommerz.com/fashion-store-6/assets/images/p-09.jpg",
      title: "T-Shirt",
      rating: { rate: 3, reviews: 40 },
      price: 50.0,
      discount: true,

      availableColors: ["black", "orange", "grey"],
    },
    {
      img: productImg1,
      title: "Glasses",
      rating: { rate: 5, reviews: 125 },
      price: 254.0,
      discount: false,

      availableColors: ["black", "gray", "darkBlue"],
    },
    {
      img: productImg2,
      title: "Sneakers",
      rating: { rate: 5, reviews: 80 },
      price: 120.0,
      discount: true,

      availableColors: ["black", "brown", "grey"],
    },
    {
      img: productImg3,
      title: "Backpack",
      rating: { rate: 4, reviews: 60 },
      price: 75.0,
      discount: false,
      availableColors: ["blue", "green"],
    },
  ];
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const productCategory = [
    "WOMEN'S-CLOTHS",
    "MAN'S-CLOTHS",
    "ACCESSORIES",
    "BAGS",
    "SHOES",
    "WATCHES",
  ];
  return (
    <div className=" w-full relative py-20 mt-10">
      <div className=" w-full px-5 sm:px-0 mx-auto sm:w-10/12">
        <h1 className=" text-4xl font-semibold w-full text-center px-5 text-[#212529]">
          Trending Products
        </h1>
        <div className=" w-full flex items-center justify-center mt-2">
          <img src={titleImg} alt="titleImg" />
        </div>
        <p className=" w-full text-center px-10 text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor.
        </p>
        <div className=" border-b w-full sm:w-11/12 md:w-10/12 mx-auto">
          <div className=" grid  grid-cols-2 sm:grid-cols-3 text-sm font-semibold text-gray-500 md:grid-cols-6 mt-8 ">
            {productCategory.map((item, index) => (
              <div
                key={index}
                className=" flex items-center justify-center w-full"
              >
                <p
                  onClick={() => {
                    setActiveCategoryIndex(index);
                  }}
                  className={` ${
                    index === activeCategoryIndex
                      ? "text-black border-[#00b9f5]  "
                      : "border-transparent"
                  } border-b-[3px] cursor-pointer hover:text-black  duration-200 hover:border-[#00b9f5]  w-fit  text-center pb-2 `}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {trendingProductsDetails.map((item, index) => (
            <div className=" w-full  group  overflow-hidden relative cursor-pointer">
              <img src={item.img} alt="" className=" w-full object-cover" />
              <div className="  w-full gap-3 grid grid-cols-2 items-end justify-between mt-4">
                <p className=" font-semibold text-sm leading-4 ">
                  {item.title}
                </p>
                <div className="flex items-center justify-end gap-1">
                  <div className="flex items-center ">
                    {Array.from({ length: 5 }, (_, index) =>
                      index < item.rating.rate ? (
                        <HiStar key={index} className="text-[#00b9f5] size-4" />
                      ) : (
                        <HiOutlineStar
                          key={index}
                          className="text-gray-400 size-4"
                        />
                      )
                    )}
                  </div>
                  <p className=" text-gray-700 text-xs">
                    ({item.rating.reviews})
                  </p>
                </div>
              </div>
              <div className=" flex items-end mt-4 pb-1 gap-3 justify-between ">
                <div className=" h-5 overflow-hidden  ">
                  <p className=" group-hover:-translate-y-5 duration-200   text-sm leading-4 pt-1">
                    <span
                      className={` ${
                        item.discount && "line-through"
                      }  text-gray-500  `}
                    >
                      $ {item.price}
                    </span>
                    <br />
                    <span className=" border-b text-xs text-gray-900 font-semibold border-black mx-1 flex items-center  gap-1">
                      {" "}
                      <HiShoppingCart /> Add to Cart
                    </span>
                  </p>
                </div>
                <div className=" flex items-center gap-1 justify-center">
                  {item.availableColors.map((color, i) => (
                    <div
                      key={i}
                      className={` size-5     relative   cursor-pointer hover:scale-105 duration-200 text-[${color}] rounded-full border shadow-sm `}
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
              {item.newProduct && (
                <p className=" absolute top-0 left-0 text-sm py-1 px-5 text-white bg-[#00a808]">
                  New
                </p>
              )}
              {item.offer && (
                <>
                  {item.offer.status && (
                    <p className=" absolute top-0 left-0 text-sm py-1 px-3 text-white bg-[#d34b56]">
                      {item.offer.offerPercentage}% Off
                    </p>
                  )}
                </>
              )}
              <div className="absolute top-0   right-0 p-2 flex items-start justify-end    ">
                <div className=" space-y-1">
                  <CiHeart className="size-7 hover:scale-110  text-gray-600  hover:text-red-600 duration-300" />
                  <GrPowerCycle className="size-7 hover:scale-110 text-gray-600 p-[3px] hover:text-[#00b9f5] opacity-0 group-hover:opacity-100 duration-500" />
                  <GoZoomIn className="size-7 hover:scale-110 text-gray-600 p-1 opacity-0  hover:text-[#00b9f5] group-hover:opacity-100 duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
