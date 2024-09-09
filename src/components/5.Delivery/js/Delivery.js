import React from "react";
import lineDeviderImg from "../../3.WeeklyOffer/img/curveDevider.png";
import bgimg from "../img/blob.svg";

export default function Delivery() {
  const details = [
    {
      img: "https://d33wubrfki0l68.cloudfront.net/a05f8c81384cd43ee9b0a61bff5baf9b4a2c6f70/1489b/assets/images/order-step-icon1.svg",
      title: "Choose your Food",
      text: "The wanted wow statement pile a windshield we a often for to tried met.",
    },
    {
      img: "https://d33wubrfki0l68.cloudfront.net/da235f9f2f51b1f0ef19adeea85b3ed9a47a5a25/6bc71/assets/images/order-step-icon2.svg",
      title: "Pay your Bill",
      text: "Then the one a pervasively hell a an it I higher a some back material didn't rationally.",
    },
    {
      img: "https://d33wubrfki0l68.cloudfront.net/ac08baf1e2fa86c4bdd511a465bd9473786f85d0/42be6/assets/images/order-step-icon3.svg",
      title: "Get the Delivery",
      text: "Even supported their not depend be and of when we the might offering were this ridden.",
    },
  ];
  return (
    <div className=" w-full py-10 bg-[#fdfbf9]  relative">
      <div className="responsiveWeith">
        <p className=" text-center text-4xl md:text-6xl font-medium">
          3 Steps Delivery
        </p>
        <div className=" flex items-center justify-center">
          <img src={lineDeviderImg} alt="" className=" w-52 object-contain" />
        </div>
        <div className=" w-full mt-16 grid grid-cols-1 gap-5 md:gap-0 sm:grid-cols-2 md:grid-cols-3 ">
          {details.map((detail, index) => (
            <div
              key={index}
              className={` ${
                index == 2 ? " md:border-r-transparent" : ""
              } px-5 border-r group cursor-default py-8  border md:hover:border-gray-50 md:border-t-transparent md:border-b-transparent md:border-l-transparent duration-300 hover:shadow-lg `}
            >
              <div className=" relative flex items-center justify-center ">
                <img src={bgimg} alt="" className="w-28 object-contain" />
                <div className=" absolute h-full top-0 left-0 flex items-center w-full justify-center">
                  <img
                    src={detail.img}
                    alt=""
                    className="  w-[58px] mr-10  group-hover:mr-4 group-hover:mb-6 duration-300"
                  />
                </div>
              </div>
              <p className=" font-semibold my-3 text-2xl text-center w-full">
                {detail.title}
              </p>
              <p className=" text-lg w-full text-center text-gray-600 my-4 leading-5 px-4">
                {detail.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
