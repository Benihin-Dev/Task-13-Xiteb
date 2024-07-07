import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import Design1 from "./Design1";
import Design2 from "./Design2";

export default function SliderForTestimonial({ data }) {
  const commets = [
    {
      name: "James Client",
      image: "https://bestwpware.com/html/tf/yale/assets/images/all-img/t1.png",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente in sit id saepe minima.",
      role: "Design Expert",
    },
    {
      name: "Meera Wodson",
      image: "https://bestwpware.com/html/tf/yale/assets/images/all-img/t2.png",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente in sit id saepe minima.",
      role: "Marketing Expert",
    },
    {
      name: "Alexa Donets",
      image: "https://bestwpware.com/html/tf/yale/assets/images/all-img/t3.png",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente in sit id saepe minima.",
      role: "System Engineer",
    },
    {
      name: "Kamal Hassan",
      image: "https://bestwpware.com/html/tf/yale/assets/images/all-img/t4.png",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente in sit id saepe minima.",
      role: "Founder",
    },
    {
      name: "Jhon Wick",
      image: "https://bestwpware.com/html/tf/yale/assets/images/all-img/t1.png",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente in sit id saepe minima.",
      role: "Actor",
    },
    {
      name: "David Banner",
      image: "https://bestwpware.com/html/tf/yale/assets/images/all-img/t4.png",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente in sit id saepe minima.",
      role: "GPT Group",
    },
  ];
  const slides = commets.map((item) => item);
  const sliderRef = useRef(null);

  //next btn function
  const handleNextSlide = (event) => {
    event.stopPropagation();
    sliderRef.current.slickNext();
  };

  //previous btn function
  const handlePrevSlide = (event) => {
    event.stopPropagation();
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slideUp w-full bg-[#f9feff] py-10">
      <div className=" py-5 w-full sm:px-0 sm:w-11/12 mx-auto flex items-end justify-between gap-5">
        <div className=" w-full gap-5 relative">
          <Slider
            ref={sliderRef}
            dots={false}
            infinite={true}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            speed={500}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {slides.map((item, index) => (
              <div key={index} className=" px-2 sm:px-5 md:px-7 pb-5 ">
                {index % 2 === 0 ? (
                  <Design1 data={item} />
                ) : (
                  <Design2 data={item} />
                )}
              </div>
            ))}
          </Slider>

          <div
            className="  absolute   sm:top-[95%] right-16 py-1  px-1 hover:text-white hover:bg-gray-200   border border-[#e8e8e8]  duration-200 rounded-sm bg-[#ffffff6c]"
            onClick={handlePrevSlide}
          >
            <IoIosArrowForward className="text-gray-400 rotate-180 size-5" />
          </div>
          <div
            className=" absolute   sm:top-[95%] right-7 py-1  px-1 hover:text-white hover:bg-gray-200   border border-[#e8e8e8]  duration-200 rounded-sm bg-[#ffffff6c]"
            onClick={handleNextSlide}
          >
            <IoIosArrowForward className="text-gray-400 size-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
