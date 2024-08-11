import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import bannerImg from "../img/banner-4.png";
import productImg1 from "../../4.PopulerProduct.js/img/ProductImages/product-1-1.jpg";
import productImg2 from "../../4.PopulerProduct.js/img/ProductImages/product-1-2.jpg";
import productImg3 from "../../4.PopulerProduct.js/img/ProductImages/product-2-1.jpg";
import productImg4 from "../../4.PopulerProduct.js/img/ProductImages/product-2-2.jpg";
import productImg5 from "../../4.PopulerProduct.js/img/ProductImages/product-3-1.jpg";
import productImg6 from "../../4.PopulerProduct.js/img/ProductImages/product-3-2.jpg";
import productImg7 from "../../4.PopulerProduct.js/img/ProductImages/product-4-1.jpg";
import productImg8 from "../../4.PopulerProduct.js/img/ProductImages/product-4-2.jpg";
import productImg9 from "../../4.PopulerProduct.js/img/ProductImages/product-5-1.jpg";
import productImg10 from "../../4.PopulerProduct.js/img/ProductImages/product-5-2.jpg";
import productImg11 from "../../4.PopulerProduct.js/img/ProductImages/product-6-1.jpg";
import productImg12 from "../../4.PopulerProduct.js/img/ProductImages/product-6-2.jpg";
import productImg13 from "../../4.PopulerProduct.js/img/ProductImages/product-7-1.jpg";
import productImg14 from "../../4.PopulerProduct.js/img/ProductImages/product-7-2.jpg";
import productImg15 from "../../4.PopulerProduct.js/img/ProductImages/product-8-1.jpg";
import productImg16 from "../../4.PopulerProduct.js/img/ProductImages/product-8-2.jpg";
import productImg17 from "../../4.PopulerProduct.js/img/ProductImages/product-9-1.jpg";
import productImg18 from "../../4.PopulerProduct.js/img/ProductImages/product-9-2.jpg";
import productImg19 from "../../4.PopulerProduct.js/img/ProductImages/product-10-1.jpg";
import productImg20 from "../../4.PopulerProduct.js/img/ProductImages/product-10-2.jpg";
import SliderForBestSelleProduct from "../../Sliders/js/SliderForBestSelleProduct";

export default function DailyBestSell() {
  const productDetails = [
    {
      name: "Mad Angels Snack",
      type: "Snack",
      img: [productImg1, productImg2],
      actualPrice: 45.5,
      discountedPrice: 28.25,
      rating: 5,
      review: 52,
      manufacture: "Food",
      status: "Save",
      savingAmount: 55,
      qty: 150,
      balanceQty: 98,
    },
    {
      name: "Happlio Omani Dates",
      type: "Made Food",
      img: [productImg3, productImg4],
      actualPrice: 55.99,
      discountedPrice: 52.56,
      rating: 4,
      review: 47,
      manufacture: "Stouffer",
      status: "Sale",
      qty: 178,
      balanceQty: 58,
    },
    {
      name: "Happilo California Almonds",
      type: "Snack",
      img: [productImg5, productImg6],
      actualPrice: 28.99,
      discountedPrice: 25.6,
      rating: 3,
      review: 407,
      manufacture: "StarKits",
      status: "Save",
      savingAmount: 10,
      qty: 15,
      balanceQty: 8,
    },
    {
      name: "Coated Banana Chips",
      type: "Vegitables",
      img: [productImg7, productImg8],
      actualPrice: 25.0,
      discountedPrice: 17.56,
      rating: 4,
      review: 70,
      manufacture: "Food",
      status: "Best Sale",
      qty: 225,
      balanceQty: 105,
    },
    {
      name: "Daily Rose Berry Mix",
      type: "Pet Food",
      img: [productImg9, productImg10],
      actualPrice: 23.99,
      discountedPrice: 25.56,
      rating: 5,
      review: 97,
      manufacture: "Food",
      status: "Sale",
      qty: 500,
      balanceQty: 198,
    },
    {
      name: "Premium Trail Mix",
      type: "MademFood",
      img: [productImg11, productImg12],
      actualPrice: 95.09,
      discountedPrice: 85.5,
      rating: 2,
      review: 99,
      manufacture: "Food",
      status: "Best Sale",
      qty: 100,
      balanceQty: 48,
    },
    {
      name: "Mom's Superfood Mix",
      type: "Meats",
      img: [productImg13, productImg14],
      actualPrice: 32.0,
      discountedPrice: 28.78,
      rating: 5,
      review: 147,
      manufacture: "Oconer",
      status: "Sale",
      qty: 50,
      balanceQty: 25,
    },
    {
      name: "Smoked Honey Spaced",
      type: "Snack",
      img: [productImg15, productImg16],
      actualPrice: 35.99,
      discountedPrice: 32.3,
      rating: 3,
      review: 17,
      manufacture: "Food",
      status: "Sale",
      qty: 150,
      balanceQty: 98,
    },
    {
      name: "Super Mom's Trail Mix",
      type: "Coffee",
      img: [productImg17, productImg18],
      actualPrice: 95.99,
      discountedPrice: 82.56,
      rating: 4,
      review: 45,
      manufacture: "Old El Paso",
      status: "Save",
      savingAmount: 35,
      qty: 540,
      balanceQty: 298,
    },
    {
      name: "Healthy Nut Mix",
      type: "Cream",
      img: [productImg19, productImg20],
      actualPrice: 5.99,
      discountedPrice: 12.56,
      rating: 3,
      review: 105,
      manufacture: "Tyson",
      status: "Sale",
      qty: 650,
      balanceQty: 380,
    },
  ];

  // Shuffle the array
  function shuffleArray(array) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }

  const daliyBestSellsData = [
    { name: "Featured", productDetails: productDetails },
    { name: "Populer", productDetails: shuffleArray(productDetails) },
    { name: "New Added", productDetails: shuffleArray(productDetails) },
  ];

  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  return (
    <div className=" w-full relative py-10 pb-40">
      <div className=" responsiveWeith">
        <div className="  w-full md:flex gap-10 justify-between ">
          <p className=" text-2xl md:text-3xl font-semibold font-montserrat w-full text-center md:w-fit cursor-default">
            Daily Best Sells
          </p>
          <ul className=" flex items-center justify-center  gap-4 font-montserrat text-gray-800 font-semibold">
            {daliyBestSellsData.map((type, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedTypeIndex(index);
                }}
                className={` ${
                  selectedTypeIndex === index ? "text-[#2faf36]" : ""
                } text-sm hover:text-[#2faf36] duration-200 pt-1 hover:pb-1 hover:pt-0 cursor-pointer `}
              >
                {type.name}
              </li>
            ))}
          </ul>
        </div>
        <div className=" sm:flex items-start gap-5 mt-10">
          <div className=" w-full  sm:w-1/2 md:w-1/3 lg:w-[25%] h-52 sm:h-fit overflow-hidden sm:overflow-auto relative rounded-lg shadow-md">
            <img
              src={bannerImg}
              alt=""
              className=" w-full object-cover hidden sm:block"
            />
            <img
              src={bannerImg}
              alt=""
              className=" absolute top-0 h-full left-0 w-full object-cover  object-bottom sm:hidden block"
            />
            <div className=" absolute top-0 left-0 w-full h-full p-3 sm:p-5 lg:p-10">
              <p className=" font-montserrat cursor-default font-semibold text-4xl text-[#3e474d] mt-3  ">
                Bring nature into your Home
              </p>
              <div className=" px-5 py-2 mt-3 sm:mt-16 rounded text-sm shadow-md flex items-center gap-2 w-fit cursor-pointer text-white duration-200 hover:bg-[#329a38] bg-[#2faf36]">
                <button>Shop Now</button>
                <IoIosArrowRoundForward className="size-4" />
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 md:w-2/3 lg:w-[75%]  mt-8 sm:mt-0 ">
            <SliderForBestSelleProduct
              data={daliyBestSellsData[selectedTypeIndex].productDetails}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
