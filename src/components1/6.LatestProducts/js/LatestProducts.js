import React from "react";
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
import SliderForProduct from "./SliderForProduct";

export default function LatestProducts() {
  const productDetails = [
    {
      img: [productImg1, productImg2],
      name: "Somersung Sonic X2000 Pro Black",
      price: "298.00",
      salePrice: false,
      rate: 5,
      productState: "hot",
    },
    {
      img: [productImg3, productImg4],
      name: "Somersung Sonic X2500 Pro White",
      price: "39.99",
      salePrice: false,
      rate: 3,
      productState: false,
    },
    {
      img: [productImg5, productImg6],
      name: "GAnti-Dust Filter, Breathable, 3 Layers Of Purifying",
      price: "17.50",
      salePrice: false,
      rate: 4,
      productState: "sold out",
    },
    {
      img: [productImg7, productImg8],
      name: "Red Hot Water Bottle, 2 Quart Capacity",
      price: "13.64",
      salePrice: false,
      rate: 3,
      productState: false,
    },
    {
      img: [productImg9, productImg10],
      name: "Digital Thermometer X30-Pro",
      price: "70.00",
      salePrice: "60.52",
      rate: 5,
      productState: "sold out",
    },
    {
      img: [productImg11, productImg12],
      name: "Extractor used to remove teeth",
      price: "53.50",
      salePrice: false,
      rate: 5,
      productState: false,
    },
    {
      img: [productImg13, productImg14],
      name: "Oxygen concentrator model KTS-5000",
      price: "80.99",
      salePrice: false,
      rate: 3,
      productState: "hot",
    },
    {
      img: [productImg15, productImg16],
      name: "Digital Thermometer X30-Pro",
      price: "480.60",
      salePrice: "470.52",
      rate: 4,
      productState: "sold out",
    },
    {
      img: [productImg17, productImg18],
      name: "Somersung Sonic X500 Basic",
      price: "38.52",
      salePrice: "45.98",
      rate: 5,
      productState: false,
    },
  ];
  return (
    <div className=" w-full py-10 relative px-5 md:px-10">
      <p className=" w-full text-center text-4xl font-semibold text-[#66bc89] pb-5">
        Latest Products
      </p>
      <div className=" w-full">
        <SliderForProduct data={productDetails} />
      </div>
    </div>
  );
}
