import React, { useState } from "react";
import SpacialOffer from "./SpacialOffer";
import spacialOfferImg from "../img/SpacialOfferImg/img1.jpg";
import featuredImg1 from "../img/FeaturedImgs/img1.jpg";
import featuredImg2 from "../img/FeaturedImgs/img2.jpg";
import featuredImg3 from "../img/FeaturedImgs/img3.jpg";
import featuredImg4 from "../img/FeaturedImgs/img4.jpg";
import featuredImg5 from "../img/FeaturedImgs/img5.jpg";
import featuredImg6 from "../img/FeaturedImgs/img6.jpg";
import featuredImg7 from "../img/FeaturedImgs/img7.jpg";
import featuredImg8 from "../img/FeaturedImgs/img8.jpg";
import FeaturedProducts from "./FeaturedProducts";
import OnSaleProducts from "./OnSaleProducts";
import TopRatedProducts from "./TopRatedProducts";

export default function SpecialOfferProducts() {
  const spacialOfferData = {
    name: "Dell XPS 13 931S Touch is RAM. SSD with Microsoft Office",
    img: spacialOfferImg,
    actualPrice: 99.99,
    salePrice: 79.99,
    totalQty: 40,
    balanceQty: 12,
    endDate: new Date(2024, 8, 8, 9, 1),
  };
  const featuredProductList = [
    {
      name: "Samsung Tab AS43",
      category: "Tab",
      img: featuredImg1,
      actualPrice: false,
      price: 685.0,
    },
    {
      name: "Tablet White EliteBook 810",
      category: "Tablet",
      img: featuredImg2,
      actualPrice: 2299.45,
      price: 1999.99,
    },
    {
      name: "Purple Tablet 52",
      category: "Tab",
      img: featuredImg3,
      actualPrice: false,
      price: 685.65,
    },
    {
      name: "MacBook 100s 64GB",
      category: "Laptop",
      img: featuredImg4,
      actualPrice: false,
      price: 685.65,
    },
    {
      name: "NX Mini Fl SMART NX",
      category: "MicroPhone",
      img: featuredImg5,
      actualPrice: false,
      price: 685.65,
    },
    {
      name: "Full color Pro M4S2dn",
      category: "Monitor",
      img: featuredImg6,
      actualPrice: false,
      price: 685.65,
    },
    {
      name: " Destiny Special Edition",
      category: "Gaming",
      img: featuredImg7,
      actualPrice: false,
      price: 685.65,
    },
    {
      name: "Camera C430W 4k Waterproof",
      category: "Camera",
      img: featuredImg8,
      actualPrice: false,
      price: 685.65,
    },
  ];
  function shuffleArray(array) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }
  const onSaleProductList = shuffleArray(featuredProductList);
  const topRatedProductList = shuffleArray(featuredProductList);
  const contents = ["Featured", "On Sale", "Top Rated"];
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className=" w-full relative py-10">
      <div className="  sm:px-10 lg:w-10/12 mx-auto lg:px-0 lg:flex items-end gap-5 ">
        <div className=" w-full lg:w-1/4 px-5 sm:px-0">
          <SpacialOffer data={spacialOfferData} />
        </div>
        <div className=" w-full lg:w-3/4 mt-10 lg:mt-0">
          <div className=" flex items-center justify-center gap-3 w-full border-b">
            {contents.map((content, index) => (
              <p
                onClick={() => setActiveContentIndex(index)}
                key={index}
                className={` ${
                  activeContentIndex === index
                    ? "border-[#e6154b] font-bold"
                    : "border-transparent"
                } border-b-[3px]    hover:font-bold duration-200 px-1 pb-1 relative group cursor-pointer `}
              >
                {content}
                <span
                  className={`  ${
                    activeContentIndex === index
                      ? "border-[#e6154b] font-bold"
                      : "border-transparent"
                  } absolute w-2  top-[108%] border-b-[3px]  duration-200 left-[45%]`}
                ></span>
              </p>
            ))}
          </div>
          {activeContentIndex === 0 ? (
            <div className="slideFromRight2 w-full px-4  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  ">
              <FeaturedProducts featuredProductList={featuredProductList} />
            </div>
          ) : activeContentIndex === 1 ? (
            <div className="slideFromRight2 w-full px-4  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  ">
              <OnSaleProducts onSaleProductList={onSaleProductList} />
            </div>
          ) : (
            <div className="slideFromRight2 w-full px-4  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  ">
              <TopRatedProducts topRatedProductList={topRatedProductList} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
