import React from "react";
import ProductTemplet from "../../4.SpecialOffer&Products/js/ProductTemplet";
import featuredImg1 from "../img/productImgs/img1.jpg";
import featuredImg2 from "../img/productImgs/img2.jpg";
import featuredImg3 from "../img/productImgs/img3.jpg";
import featuredImg4 from "../img/productImgs/img4.jpg";
import featuredImg5 from "../img/productImgs/img5.jpg";
import featuredImg6 from "../img/productImgs/img6.jpg";
import featuredImg7 from "../img/productImgs/img7.jpg";
import featuredImg8 from "../img/productImgs/img8.jpg";
import SliderForRecentlyViewedProducts from "./SliderForRecentlyViewedProducts";

export default function RecentlyViewedProducts() {
  const recentlyViewedProductList = [
    {
      name: "Samsung Tab AS43",
      category: "Tab",
      img: featuredImg1,
      price: 685.0,
    },
    {
      name: "Tablet White EliteBook 810",
      category: "Tablet",
      img: featuredImg2,
      price: 1999.99,
    },
    {
      name: "Purple Tablet 52",
      category: "Tab",
      img: featuredImg3,

      price: 685.65,
    },
    {
      name: "MacBook 100s 64GB",
      category: "Laptop",
      img: featuredImg4,

      price: 685.65,
    },
    {
      name: "NX Mini Fl SMART NX",
      category: "MicroPhone",
      img: featuredImg5,

      price: 685.65,
    },
    {
      name: "Full color Pro M4S2dn",
      category: "Monitor",
      img: featuredImg6,

      price: 685.65,
    },
    {
      name: " Destiny Special Edition",
      category: "Gaming",
      img: featuredImg7,

      price: 685.65,
    },
    {
      name: "Camera C430W 4k Waterproof",
      category: "Camera",
      img: featuredImg8,

      price: 685.65,
    },
  ];
  return (
    <div className=" w-full relative py-10">
      <div className="responsiveWeith ">
        <p className=" border-b-[3px] pb-2 w-fit border-[#e6154b] ">
          Recently Viewed
        </p>
        <div className=" w-full ">
          <SliderForRecentlyViewedProducts data={recentlyViewedProductList} />
        </div>
      </div>
    </div>
  );
}
