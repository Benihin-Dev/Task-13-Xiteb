import React from "react";
import lineDeviderImg from "../../3.WeeklyOffer/img/curveDevider.png";
import bgimg from "../../5.Delivery/img/blob.svg";
import pizzaImg1 from "../../2.Hero/img/pizza (2).png";

import { PiTriangleThin } from "react-icons/pi";
import { GiCircle } from "react-icons/gi";

export default function FastestDelivery() {
  const details = [
    {
      img: "https://d33wubrfki0l68.cloudfront.net/410245a192b4d598036d08360002956643351381/d03ee/assets/images/order-outline-con1.svg",
      title: "Find nearest Restaurants",
      desc: "One with to of and behave. That onto and she desires a concept of through with when reached will so you",
    },
    {
      img: "https://d33wubrfki0l68.cloudfront.net/610d09e174d292f5d5f2b57be173040e67c33064/472cb/assets/images/order-outline-con2.svg",
      title: "Order food from menu",
      desc: "One with to of and behave. That onto and she desires a concept of through with when reached will so you",
    },
    {
      img: "https://d33wubrfki0l68.cloudfront.net/4cca27c232204e1152d274c5917e30b75529382b/1cca2/assets/images/order-outline-con3.svg",
      title: "Pay your food bill",
      desc: "One with to of and behave. That onto and she desires a concept of through with when reached will so you",
    },
    {
      img: "https://d33wubrfki0l68.cloudfront.net/29a08bbfe7778b5a61c2143d4e365183087bdc3f/dbfea/assets/images/order-outline-con4.svg",
      title: "Get delivery within 50 mins",
      desc: "One with to of and behave. That onto and she desires a concept of through with when reached will so you",
    },
  ];
  return (
    <div className=" w-full pt-16 overflow-hidden relative bg-[#fdfbf9]">
      <div className="responsiveWeith ">
        <p className=" text-center text-4xl md:text-6xl font-medium">
          3 Steps Delivery
        </p>
        <div className=" flex items-center justify-center">
          <img src={lineDeviderImg} alt="" className=" w-52 object-contain" />
        </div>
        <div className=" w-full mt-10 grid sm:grid-cols-2 ">
          <div className=" w-full flex items-end justify-center pr-5 mb-10 sm:mb-0    relative">
            <img
              src="https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/018259f70525191891339c090a1766cc692cb344/f3703/assets/images/delivery-image.png"
              alt=""
              className=" w-full object-contain  z-20"
            />

            <PiTriangleThin className=" top-[10%] left-[4%] absolute size-12 text-gray-300 reverceRotate" />
            <GiCircle className=" top-[20%] left-[8%] absolute size-10 text-gray-300 moving" />
            <GiCircle className=" top-[35%] left-[10%] absolute size-16 text-[#edb09236] movingOnX" />
            <GiCircle className="top-[10%] left-[80%] absolute size-16 text-[#edb09243] movingOnX" />

            <div className=" absolute top-[30%] w-[200%] right-5 border border-dashed   border-[#ffa101] bottom-0 bg-[#fdf6ec]">
              <div className=" relative w-full h-full">
                <img
                  src={pizzaImg1}
                  className=" w-[200px] absolute top-[50%] left-[50%] reverceRotate {
"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" w-full pb-10 space-y-5">
            {details.map((item, index) => (
              <div
                key={index}
                className=" group bg-white shadow hover:shadow-md duration-200  relative w-full border p-4 flex items-center"
              >
                <div className=" w-1/3 sm:w-1/4">
                  <div className=" relative flex items-center justify-center ">
                    <img
                      src={bgimg}
                      alt=""
                      className=" lg:w-28 w-32 object-contain"
                    />
                    <div className=" absolute h-full top-0 left-0 flex items-center w-full justify-center">
                      <img
                        src={item.img}
                        alt=""
                        className="  w-[60px] mr-5 object-contain  group-hover:mr-0 group-hover:mb-6 duration-300"
                      />
                    </div>
                  </div>
                </div>
                <div className=" w-2/3 sm:w-3/4">
                  <p className=" text-xl md:text-2xl pb-5 font-semibold ">
                    {item.title}
                  </p>
                  <p className=" text-gray-500   text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
