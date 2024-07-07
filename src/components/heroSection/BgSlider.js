import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

export default function BgSlider() {
  const images = [
    "https://www.harringtonhousing.com/uploads/0003/3066/2023/03/28/the-benefits-of-study-groups-why-two-heads-are-better-than-one.jpeg",
    "https://uta.pressbooks.pub/app/uploads/sites/24/2018/07/2018-UTA-Student-Success-005.jpg",
    "https://images.shiksha.com/mediadata/images/articles/1693247327php9Ixvyk.jpeg",
  ];
  const slides = images.map((item) => item);
  const sliderRef = useRef(null);

  return (
    <div className="w-full h-full bg-transparent   ">
      <Slider
        ref={sliderRef}
        arrows={false}
        dots={false}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={8000}
        speed={1500}
      >
        {slides.map((item, index) => (
          <img
            key={index}
            src={item}
            className="
          h-[150vh] sm:h-[170vh]  w-full object-cover"
            alt=""
          />
        ))}
      </Slider>
    </div>
  );
}
