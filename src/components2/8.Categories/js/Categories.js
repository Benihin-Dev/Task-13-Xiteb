import React from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import productImg1 from "../img/productImg/01.jpg";
import productImg2 from "../img/productImg/02.jpg";
import productImg3 from "../img/productImg/03.jpg";
import productImg4 from "../img/productImg/04.jpg";
import productImg5 from "../img/productImg/05.jpg";
import productImg6 from "../img/productImg/06.jpg";
import productImg7 from "../img/productImg/07.jpg";
import productImg8 from "../img/productImg/08.jpg";
import SliderForCategoryProducts from "../../productSlider/js/SliderForCategoryProducts";

export default function Categories() {
  const categoryData = {
    title: "New Product",
    desc: "The opportunity will quickly pass. Take it!",
    bgColor: "bg-[white]",
    data: [
      {
        name: "Samsung AGO ",
        img: productImg1,
        price: 124,
        sale: false,
        discountPrice: 119,
        rate: 5,
      },
      {
        name: "Smart Watch",
        img: productImg2,
        price: 47,
        sale: true,
        discountPrice: 45,
        rate: 3,
      },
      {
        name: "Nikon Camera",
        img: productImg3,
        price: 78,
        sale: true,
        discountPrice: 75,
        rate: 2,
      },
      {
        name: "Wireless Camera",
        img: productImg4,
        price: 19,
        sale: false,
        discountPrice: 17,
        rate: 4,
      },
      {
        name: "Samsung S23 Ultra",
        img: productImg8,
        price: 185,
        sale: false,
        discountPrice: 178,
        rate: 5,
      },
      {
        name: "Dashboard Camera",
        img: productImg5,
        price: 98,
        sale: true,
        discountPrice: 89,
        rate: 4,
      },
      {
        name: "USB Charger",
        img: productImg6,
        price: 45,
        sale: false,
        discountPrice: 40,
        rate: 5,
      },
      {
        name: "Samsung Earbud",
        img: productImg7,
        price: 99,
        sale: true,
        discountPrice: 95,
        rate: 3,
      },
    ],
  };
  const categoryType = [
    "Smart Phone",
    "Laptop & Computer",
    "Camera & Photo",
    "Home Audio & Theater",
    "Kichen Appliances",
    "View All Categories",
  ];
  return (
    <div className=" w-full relative py-10">
      <div className=" responsiveWeith md:flex border py-5">
        <div className="  md:w-1/3 lg:w-1/4 p-5   mx-10 md:mx-4 rounded ">
          <p className="   pb-5 border-b font-semibold">
            Shop By Categories Product
          </p>
          {categoryType.map((category, i) => (
            <div key={i} className=" flex items-center gap-2 py-3">
              <MdOutlineKeyboardDoubleArrowDown className=" -rotate-90 size-6" />
              <p className=" hover:text-[#ffc107]  border-b border-b-transparent font-semibold cursor-pointer hover:border-[#ffc107] duration-200">
                {category}
              </p>
            </div>
          ))}
        </div>
        <div className=" w-full md:w-2/3 lg:w-3/4 pb-5   mr-5">
          <SliderForCategoryProducts data={categoryData} />
        </div>
      </div>
    </div>
  );
}
