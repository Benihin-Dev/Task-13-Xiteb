import React, { useState } from "react";
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
import SliderForTopSeller from "./SliderForTopSeller";

export default function TopSeller() {
  const [activeSection, setActiveSection] = useState("Blood Pressure");
  const productDetails = [
    {
      img: [productImg1, productImg2],
      name: "Somersung Sonic X2000 Pro Black",
      price: "298.00",
      salePrice: false,
      rate: 5,
      productState: "hot",
      qty: 22,
    },
    {
      img: [productImg3, productImg4],
      name: "Somersung Sonic X2500 Pro White",
      price: "39.99",
      salePrice: "30.99",
      rate: 3,
      productState: "sale",
      qty: 78,
    },
    {
      img: [productImg5, productImg6],
      name: "GAnti-Dust Filter, Breathable, 3 Layers Of Purifying",
      price: "17.50",
      salePrice: false,
      rate: 4,
      productState: "sold out",
      qty: 12,
    },
    {
      img: [productImg7, productImg8],
      name: "Red Hot Water Bottle, 2 Quart Capacity",
      price: "13.64",
      salePrice: false,
      rate: 3,
      productState: false,
      qty: 49,
    },
    {
      img: [productImg9, productImg10],
      name: "Digital Thermometer X30-Pro",
      price: "70.00",
      salePrice: "60.52",
      rate: 5,
      productState: "hot",
      qty: 128,
    },
    {
      img: [productImg11, productImg8],
      name: "Extractor used to remove teeth",
      price: "53.50",
      salePrice: "50.50",
      rate: 5,
      productState: "sale",
      qty: 72,
    },
  ];
  return (
    <div className=" w-full py-10 px-5 md:px-10">
      <div className=" w-full text-[#66bc89] pb-10">
        <p className=" text-4xl text-center font-bold ">
          Top 5 Bestsellers in:
        </p>
        <div className=" w-full md:flex items-center justify-center gap-8 mt-4">
          <div className=" flex items-center justify-center gap-8">
            <p
              onClick={(e) => {
                setActiveSection(e.target.innerText);
              }}
              className={` ${
                activeSection === "Blood Pressure" ? " font-bold underline" : ""
              } hover:underline duration-300 text-xl hover:font-bold cursor-pointer `}
            >
              Blood Pressure
            </p>
            <p
              onClick={(e) => {
                setActiveSection(e.target.innerText);
              }}
              className={`${
                activeSection === "Face Mask" ? " font-bold underline" : ""
              } hover:underline duration-300 text-xl hover:font-bold cursor-pointer `}
            >
              Face Mask
            </p>
          </div>
          <p
            onClick={(e) => {
              setActiveSection(e.target.innerText);
            }}
            className={` ${
              activeSection === "Stomatology" ? " font-bold underline" : ""
            } md:w-fit w-full text-center md:text-start hover:underline duration-300 text-xl hover:font-bold cursor-pointer `}
          >
            Stomatology
          </p>
        </div>
      </div>
      <SliderForTopSeller data={productDetails} />
    </div>
  );
}
