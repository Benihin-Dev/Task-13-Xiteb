import React from "react";
import Timer from "../../assets/js/Timer";

import productImg1 from "../img/1.jpg";
import productImg2 from "../img/2.jpg";
import productImg3 from "../img/3.jpg";
import productImg4 from "../img/4.jpg";
import productImg5 from "../img/5.jpg";
import productImg6 from "../img/6.jpg";
import productImg7 from "../img/7.jpg";
import productImg8 from "../img/8.jpg";
import productImg9 from "../img/9.jpg";
import productImg10 from "../img/10.jpg";
import productImg11 from "../img/11.jpg";
import productImg12 from "../img/12.jpg";
import productImg13 from "../img/13.jpg";
import productImg14 from "../img/14.jpg";
import productImg15 from "../img/15.jpg";
import productImg16 from "../img/16.jpg";
import productImg17 from "../img/17.jpg";
import productImg18 from "../img/18.jpg";
import SliderForDealProduct from "./SliderForDealProduct";

export default function BestDeal() {
  const productDetails = [
    {
      img: [productImg1, productImg2],
      name: "Somersung Sonic X2000 Pro Black",
      price: "298.00",
      salePrice: false,
      rate: 5,
      productState: false,
      qty: 22,
      discount: "-15%",
    },
    {
      img: [productImg3, productImg4],
      name: "Somersung Sonic X2500 Pro White",
      price: "39.99",
      salePrice: false,
      rate: 3,
      productState: false,
      qty: 78,
      discount: "-25%",
    },
    {
      img: [productImg5, productImg6],
      name: "GAnti-Dust Filter, Breathable, 3 Layers Of Purifying",
      price: "17.50",
      salePrice: false,
      rate: 4,
      productState: false,
      qty: 12,
      discount: "-35%",
    },
    {
      img: [productImg7, productImg8],
      name: "Red Hot Water Bottle, 2 Quart Capacity",
      price: "13.64",
      salePrice: false,
      rate: 3,
      productState: false,
      qty: 49,
      discount: "-85%",
    },
    {
      img: [productImg9, productImg10],
      name: "Digital Thermometer X30-Pro",
      price: "70.00",
      salePrice: "60.52",
      rate: 5,
      productState: false,
      qty: 128,
      discount: "-20%",
    },
    {
      img: [productImg11, productImg12],
      name: "Extractor used to remove teeth",
      price: "53.50",
      salePrice: false,
      rate: 5,
      productState: false,
      qty: 72,
      discount: "-10%",
    },
    {
      img: [productImg13, productImg14],
      name: "Oxygen concentrator model KTS-5000",
      price: "80.99",
      salePrice: false,
      rate: 3,
      productState: false,
      qty: 65,
      discount: "-20%",
    },
    {
      img: [productImg15, productImg16],
      name: "Digital Thermometer X30-Pro",
      price: "480.60",
      salePrice: "470.52",
      rate: 4,
      productState: false,
      qty: 205,
      discount: "-15%",
    },
    {
      img: [productImg17, productImg18],
      name: "Somersung Sonic X500 Basic",
      price: "38.52",
      salePrice: "45.98",
      rate: 5,
      productState: false,
      qty: 8,
      discount: "-32%",
    },
  ];
  return (
    <div className=" w-full px-5 sm:px-10 py-10">
      <div className=" md:flex items-center justify-center gap-10">
        <p className=" cursor-default text-[#66bc89] text-3xl text-center w-full md:w-fit">
          <span className="  font-semibold">Best Deals </span>of the week!
        </p>
        <div className=" scale-110 lg:scale-125 mt-3 sm:mt-0">
          <Timer
            endDate={new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)}
          />
        </div>
      </div>
      <div className=" w-full border-[3px] rounded-sm bg-white border-[#103178] mt-5">
        <SliderForDealProduct data={productDetails} />
      </div>
    </div>
  );
}
