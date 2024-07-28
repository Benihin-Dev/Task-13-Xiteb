import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from "../img/slider-1.jpg";
import sliderImg2 from "../img/slider-2.jpg";
import sliderImg3 from "../img/slider-3.jpg";

export default function Hero() {
  const sliderData = [
    {
      img: sliderImg1,
      topText: "Winter Collection 2024",
      bottomText: {
        normalText: "Any variation thats fits your",
        boldText: "imagination",
      },
    },
    {
      img: sliderImg2,
      topText: "Spring Sale 2024",
      bottomText: {
        normalText: "Shop Online And Get Flat",
        boldText: "50% Off",
      },
    },
    {
      img: sliderImg3,
      topText: "Spring Sale 2024",
      bottomText: {
        normalText: "Passion for Fashion Style ",
        boldText: "For Live",
      },
    },
  ];

  const slides = sliderData.map((item) => item);
  const sliderRef = useRef(null);
  return (
    <div className=" w-full h-fit relative   bg-[#f9f9f9]">
      <Slider
        ref={sliderRef}
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}
        speed={1200}
        appendDots={(dots) => (
          <div
            style={{
              position: "absolute",
              bottom: "5px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ul className="gap-0">{dots}</ul>
          </div>
        )}
        customPaging={(i) => (
          <div
            className=" hover:bg-white"
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#808080",
            }}
          ></div>
        )}
      >
        {slides.map((item, index) => (
          <div key={index} className=" w-full relative h-[25vh] sm:h-full">
            <img
              src={item.img}
              alt=""
              className=" object-cover h-full sm:h-fit"
            />
            <div className=" absolute top-0 left-0 right-0 bottom-0 ">
              <div className=" w-full h-full sm:w-10/12 px-5 sm:px-0 mx-auto flex items-center">
                <div className=" w-1/2 md:w-1/3 text-[#262626]">
                  <p className=" font-semibold pb-4">{item.topText}</p>
                  <p className=" text-3xl lg:text-5xl leading-none pb-5 hidden sm:block">
                    {item.bottomText.normalText}
                    <span className=" font-semibold">
                      {" "}
                      {item.bottomText.boldText}
                    </span>
                  </p>
                  <button className=" mb-3 px-8 py-2 text-white bg-[#262626] hover:text-[#262626] hover:bg-white duration-300 font-semibold">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
