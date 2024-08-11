import React, { useState } from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

//category Images
import categoryImg1 from "../img/trendingCategories/category1.svg";
import categoryImg2 from "../img/trendingCategories/category2.svg";
import categoryImg3 from "../img/trendingCategories/category3.svg";
import categoryImg4 from "../img/trendingCategories/category4.svg";
import categoryImg5 from "../img/trendingCategories/category5.svg";
import categoryImg6 from "../img/trendingCategories/category6.svg";
import categoryImg7 from "../img/trendingCategories/category7.svg";
import categoryImg8 from "../img/trendingCategories/category8.svg";
import categoryImg9 from "../img/trendingCategories/category9.svg";
import categoryImg10 from "../img/trendingCategories/category10.svg";
import categoryImg11 from "../img/trendingCategories/category11.svg";
import categoryImg12 from "../img/trendingCategories/category12.svg";

export default function TrendingCategory({ gridSize }) {
  const trendingCategoryList = [
    { icon: categoryImg1, title: "Milk & Dairies" },
    { icon: categoryImg2, title: "Wines & Drinks" },
    { icon: categoryImg3, title: "PetFoods &  Toy" },
    { icon: categoryImg4, title: "Fresh Seafood" },
    { icon: categoryImg5, title: "Backing Material" },
    { icon: categoryImg6, title: "Fast Food" },
    { icon: categoryImg7, title: "Fresh Fruits" },
    { icon: categoryImg8, title: "Vegitables" },
    { icon: categoryImg9, title: "Bread and Juices" },
  ];
  const extraTrendingCategoryList = [
    { icon: categoryImg10, title: "Milk & Dairies" },
    { icon: categoryImg11, title: "Wines & Drinks" },
    { icon: categoryImg12, title: "Fresh Seafood" },
  ];
  const [extraTrendingCategoryListState, setExtraTrendingCategoryListState] =
    useState(false);

  return (
    <>
      <ul
        className={` ${
          gridSize === 2 ? "grid-cols-2" : "grid-cols-1"
        } w-full  grid  gap-3 `}
      >
        {trendingCategoryList.map((category, index) => (
          <li
            key={index}
            className={` text-[10px] flex items-center cursor-pointer duration-200 shadow-sm hover:shadow-sm hover:border-[#c3f2c9] hover:text-[#2faf36] border-gray-100 gap-2 border px-3 py-1 rounded-sm   `}
          >
            <img src={category.icon} className=" w-6" alt="" />
            <p className=" leading-3 text-[13px]">{category.title}</p>
          </li>
        ))}
      </ul>
      {extraTrendingCategoryListState && (
        <ul
          className={` duration-500  pt-3 m w-full  grid  ${
            gridSize === 2 ? "grid-cols-2" : "grid-cols-1"
          } gap-3 my-5" `}
        >
          {extraTrendingCategoryList.map((category, index) => (
            <li
              key={index}
              className=" flex items-center cursor-pointer duration-200 shadow-sm hover:shadow-sm hover:border-[#c3f2c9] hover:text-[#2faf36] border-gray-100 gap-2 border px-3 py-1 rounded-sm "
            >
              <img src={category.icon} className=" w-6" alt="" />
              <p className=" leading-3 text-[13px]">{category.title}</p>
            </li>
          ))}
        </ul>
      )}
      <div className=" flex items-center justify-center mt-5">
        <div
          onClick={() => {
            setExtraTrendingCategoryListState(!extraTrendingCategoryListState);
          }}
          className=" duration-200 flex items-center justify-center gap-1 cursor-pointer"
        >
          {extraTrendingCategoryListState === false ? (
            <AiOutlinePlusCircle className=" size-5 text-[#2faf36]" />
          ) : (
            <AiOutlineMinusCircle className=" size-5 text-[#2faf36]" />
          )}
          <p>
            {" "}
            {extraTrendingCategoryListState === false ? "Show More.." : "Hide"}
          </p>
        </div>
      </div>
    </>
  );
}
