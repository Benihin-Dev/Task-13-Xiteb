import React from "react";
import { FaRegEye } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosHeart } from "react-icons/io";
import bgImg from "../img/body-02.png";
import { useInView } from "react-intersection-observer";

//image import
import shopImg1 from "../img/fx_shop_1.jpg";
import shopImg2 from "../img/fx_shop_2.jpg";
import shopImg3 from "../img/fx_shop_3.jpg";
import shopImg4 from "../img/fx_shop_4.jpg";
import shopImg5 from "../img/fx_shop_5.jpg";
import shopImg6 from "../img/fx_shop_6.jpg";
import shopImg7 from "../img/fx_shop_7.jpg";
import shopImg8 from "../img/fx_shop_8.jpg";
import CustomBtn from "../../assets/js/CustomBtn";

export default function OurDeliciousFood() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const data = [
    {
      img: shopImg1,
      title: "Rosemilk Cone ice-cream",
      desc: "Cool down with a scoop of our refreshing frozen Rosemilk ice cream - packed with antioxidants!",
      price: "15.00",
    },
    {
      img: shopImg2,
      title: "Rosemilk Cone ice-cream",
      desc: "Cool down with a scoop of our refreshing frozen Rosemilk ice cream - packed with antioxidants!",
      price: "10.00",
    },
    {
      img: shopImg3,
      title: "iced-coffee",
      desc: "Cool down with a scoop of our refreshing frozen Rosemilk ice cream - packed with antioxidants!",
      price: "31.00",
    },
    {
      img: shopImg4,
      title: "Frozen Blueberry ice-cream",
      desc: "Cool down with a scoop of our refreshing frozen Rosemilk ice cream - packed with antioxidants!",
      price: "18.00",
    },
    {
      img: shopImg5,
      title: "Marshmallows Smores",
      desc: "Cool down with a scoop of our refreshing frozen Rosemilk ice cream - packed with antioxidants!",
      price: "52.00",
    },
    {
      img: shopImg6,
      title: "Black Coffee",
      desc: "Cool down with a scoop of our refreshing frozen Rosemilk ice cream - packed with antioxidants!",
      price: "22.00",
    },
    {
      img: shopImg7,
      title: "Blackcurrant Pudding",
      desc: "Cool down with a scoop of our refreshing frozen Rosemilk ice cream - packed with antioxidants!",
      price: "13.00",
    },
    {
      img: shopImg8,
      title: "Marshmallow Smores",
      desc: "Cool down with a scoop of our refreshing frozen Rosemilk ice cream - packed with antioxidants!",
      price: "29.00",
    },
    ,
  ];
  return (
    <div className=" w-full relative py-20 ">
      <div
        ref={ref}
        className={`animated-component ${
          inView ? "is-visible" : ""
        } responsiveWeith `}
      >
        <p className=" text-center text-4xl font-medium uppercase">
          Our
          <span className=" text-[#c41f3a]"> Delicious</span> Food
        </p>
        <div className=" mt-8 w-full grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="   px-5 pt-5 shadow-lg  rounded-md bg-white text-[#333333]  duration-200 pb-5 hover:pb-9 border-t-gray-800 border-b-4 border-[#c41f3a] hover:mx-2"
            >
              <img src={item.img} className="w-full object-contain" alt="" />
              <div>
                <p className=" mt-5  text-center text-xl font-semibold">
                  {item.title}
                </p>
                <p className=" mt-5 text-center text-xl leading-7">
                  {item.desc}
                </p>
                <p className=" py-5 text-2xl font-medium text-center text-[#c41f3a]">
                  ${item.price}
                </p>
                <div className=" mt-2 flex items-center gap-5 justify-center text-white">
                  <div className="size-10 flex items-center justify-center cursor-pointer bg-[#333333] hover:bg-[#c41f3a] duration-200 rounded-full ">
                    <FaRegEye className=" size-6" />
                  </div>
                  <div className=" size-10 flex items-center justify-center cursor-pointer bg-[#333333] hover:bg-[#c41f3a] duration-200 rounded-full ">
                    <TiShoppingCart className=" size-7" />
                  </div>
                  <div className="size-10 flex items-center justify-center cursor-pointer bg-[#333333] hover:bg-[#c41f3a] duration-200 rounded-full ">
                    <IoIosHeart className=" size-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex items-center justify-center">
          <CustomBtn text={"LOAD MORE"} />
        </div>
      </div>
      <div className=" absolute  top-[70%] xAxisMovingAnimation -z-10 left-5">
        <img src={bgImg} className=" w-96" alt="" />
      </div>
      <div className=" absolute top-0 left-0 w-full h-full bg-[#f1fbff] -z-20"></div>
    </div>
  );
}
