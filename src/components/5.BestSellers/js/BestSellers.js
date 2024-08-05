import React, { useState } from "react";
import productImg1 from "../img/Top20Imgs/img1.jpg";
import productImg2 from "../img/Top20Imgs/img2.jpg";
import productImg3 from "../img/Top20Imgs/img3.jpg";
import productImg4 from "../img/Top20Imgs/img4.jpg";
import productImg5 from "../img/Top20Imgs/img5.jpg";
import productImg6 from "../img/Top20Imgs/img6.jpg";
import productImg7 from "../img/Top20Imgs/img7.jpg";
import productImg8 from "../img/Top20Imgs/img8.jpg";
import ProductTempletForBS from "./ProductTempletForBS";

export default function BestSellers() {
  const contentList = [
    "Top 20",
    "Phones & Tablet",
    "Laptop & Computer",
    "Video Camera",
  ];
  const Top20ProductList = [
    {
      name: "Samsung Tab AS43",
      category: "Tab",
      img: productImg1,
      price: 685.0,
    },
    {
      name: "Tablet White EliteBook 810",
      category: "Tablet",
      img: productImg2,
      price: 1999.99,
    },
    {
      name: "Purple Tablet 52",
      category: "Tab",
      img: productImg3,
      price: 685.65,
    },
    {
      name: "MacBook 100s 64GB",
      category: "Laptop",
      img: productImg4,
      price: 685.65,
    },
    {
      name: "NX Mini Fl SMART NX",
      category: "MicroPhone",
      img: productImg5,
      price: 685.65,
    },
    {
      name: "Full color Pro M4S2dn",
      category: "Monitor",
      img: productImg6,
      price: 685.65,
    },
    {
      name: " Destiny Special Edition",
      category: "Gaming",
      img: productImg7,
      price: 685.65,
    },
    {
      name: "Camera C430W 4k Waterproof",
      category: "Camera",
      img: productImg8,
      price: 685.65,
    },
  ];
  const [activeContent, setActiveContent] = useState("Top 20");
  return (
    <div className=" w-full relative py-16">
      <div className=" responsiveWeith">
        <div className=" sm:flex items-center justify-between gap-10 border-b">
          <div className="">
            <p className="  text-center  mx-auto w-fit px-12 sm:px-3 pb-3 border-b-[3px] border-[#e6154b]">
              Best Sellers
            </p>
          </div>
          <ul className=" grid grid-cols-2 sm:flex items-center  gap-1 text-xs  mt-4 sm:mt-0 font-semibold">
            {contentList.map((content, index) => (
              <li
                onClick={() => {
                  setActiveContent(content);
                }}
                key={index}
                className={` ${
                  activeContent === content
                    ? "border-[#e6154b]  "
                    : " border-transparent  "
                } px-5 pt-1 hover:bg-[#e6154b] mx-auto hover:text-white duration-200 cursor-pointer pb-[3px] border w-fit  bg-white rounded-full `}
              >
                {content}
              </li>
            ))}
          </ul>
        </div>
        {activeContent === "Top 20" ? (
          <ProductTempletForBS Top20ProductList={Top20ProductList} />
        ) : (
          <div className=" w-full flex items-center justify-center h-52 ">
            <img
              src="https://miro.medium.com/v2/resize:fit:882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
              className=" w-32 object-cover   mt-10"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}
