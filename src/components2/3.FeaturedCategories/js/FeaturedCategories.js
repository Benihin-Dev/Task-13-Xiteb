import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

//categoryImages
import catImg1 from "../img/categoryImg/category-1.png";
import catImg2 from "../img/categoryImg/category-2.png";
import catImg3 from "../img/categoryImg/category-3.png";
import catImg4 from "../img/categoryImg/category-4.png";
import catImg5 from "../img/categoryImg/category-5.png";
import catImg6 from "../img/categoryImg/category-6.png";
import catImg7 from "../img/categoryImg/category-7.png";
import catImg8 from "../img/categoryImg/category-8.png";
import catImg9 from "../img/categoryImg/category-9.png";
import catImg10 from "../img/categoryImg/category-10.png";

//bannerImages
import bannerImg1 from "../img/bannerImg/banner-1.png";
import bannerImg2 from "../img/bannerImg/banner-2.png";
import bannerImg3 from "../img/bannerImg/banner-3.png";

export default function FeaturedCategories() {
  const categories = [
    "Cake & Milk",
    "Coffes & Teas",
    "Pet Foods",
    "Vegitables",
  ];

  const dataForFeaturedCategory = [
    {
      name: "Detergent",
      img: catImg1,
      bgColor: "#f3fce3",
      itemCount: "26",
    },
    { name: "Biscuts", img: catImg2, bgColor: "bg-[#fffcea]", itemCount: "28" },
    { name: "Drinks", img: catImg3, bgColor: "bg-[#ebffec]", itemCount: "14" },
    {
      name: "Vegitables",
      img: catImg4,
      bgColor: "#ffefea",
      itemCount: "54",
    },
    { name: "Backing", img: catImg5, bgColor: "bg-[#fff2ea]", itemCount: "56" },
    {
      name: "Milk & Dairies",
      img: catImg6,
      bgColor: "#fff3ff",
      itemCount: "72",
    },
    { name: "Fruits", img: catImg7, bgColor: "bg-[#f3fce3]", itemCount: "36" },
    {
      name: "Sea Foods",
      img: catImg8,
      bgColor: "#ffefea",
      itemCount: "123",
    },
    {
      name: "Fast Foods",
      img: catImg9,
      bgColor: "#fffcea",
      itemCount: "34",
    },
    {
      name: "Coffee & Tea",
      img: catImg10,
      bgColor: "#ffefea",
      itemCount: "89",
    },
  ];

  const dataForCategoryBanner = [
    { img: bannerImg1, title: "Everyday Fresh Clean with Our Products" },
    { img: bannerImg2, title: "Make your Breakfast Healthy and Easy" },
    { img: bannerImg3, title: "The best Organic Products Online" },
  ];
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  return (
    <div className=" w-full relative py-10">
      <div className="responsiveWeith">
        <div className=" md:flex w-full gap-5 items-end justify-between space-y-3 md:space-y-0">
          <p className="font-montserrat text-2xl md:text-3xl font-semibold cursor-default">
            Featured Categoried
          </p>
          <div className=" font-montserrat ml-5 grid grid-cols-2 sm:text-[13px] text-sm  md:grid-cols-4 items-center  md:gap-4">
            {categories.map((item, index) => (
              <p
                onClick={() => {
                  setActiveCategoryIndex(index);
                }}
                key={index}
                className={` ${
                  activeCategoryIndex === index
                    ? "text-[#2faf36]"
                    : "text-gray-900"
                }  cursor-pointer font-semibold hover:text-[#2faf36] duration-200 `}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className=" w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 md:gap-4 lg:gap-5 mt-8">
          {dataForFeaturedCategory.map((category, index) => (
            <div
              key={index}
              style={{ backgroundColor: category.bgColor }}
              className=" rounded-md hover:border-[#dbeee0] border shadow hover:shadow-lg cursor-pointer group bg-[#f3fce3] p-3"
            >
              <img src={category.img} alt="" className="duration-300" />
              <p className=" leading-3 pb-1 w-full text-center text-sm font-semibold">
                {category.name}
              </p>
              <p className=" w-full text-center text-xs text-gray-500">
                {category.itemCount} items
              </p>
            </div>
          ))}
        </div>
        <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 ">
          {dataForCategoryBanner.map((banner, index) => (
            <div
              key={index}
              className=" p-5 md:p-10  font-montserrat rounded-md shadow-md border relative  overflow-hidden"
            >
              <div className=" my-2 w-11/12 lg:w-8/12  ">
                <p className=" text-2xl font-bold mb-8 leading-7 cursor-default text-[#55524c]">
                  {banner.title}
                </p>
                <div className=" px-5 py-2 rounded text-sm shadow-md flex items-center gap-2 w-fit cursor-pointer text-white duration-200 hover:bg-[#329a38] bg-[#2faf36]">
                  <button>Shop Now</button>
                  <MdKeyboardArrowDown className="size-4" />
                </div>
              </div>
              <div className=" absolute top-0 w-full h-full bottom-0 right-0 -z-10 left-0">
                <img
                  src={banner.img}
                  className=" w-full h-full object-cover object-botto"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
