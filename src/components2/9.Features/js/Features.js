import React from "react";
import icon1 from "../img/icon-1.svg";
import icon2 from "../img/icon-2.svg";
import icon3 from "../img/icon-3.svg";
import icon4 from "../img/icon-4.svg";
import icon5 from "../img/icon-5.svg";

export default function Features() {
  const data = [
    {
      title: "Best Price & Offers",
      subTitle: "Orders $50 or more",
      icon: icon1,
    },
    {
      title: "Free Delivery",
      subTitle: "24/7 amazing Service",
      icon: icon2,
    },
    {
      title: "Great do•lu deal",
      subTitle: "When You sign up",
      icon: icon3,
    },
    {
      title: "Wide assorment",
      subTitle: "Mega Discounts",
      icon: icon4,
    },
    {
      title: "Easy Returns",
      subTitle: "Within 30 days",
      icon: icon5,
    },
  ];
  return (
    <div className=" w-full relative py-10 cursor-default">
      <div className="responsiveWeith grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className=" bg-[#e9ecf3] rounded-md p-3 flex items-center gap-4"
          >
            <img src={item.icon} alt="" className=" size-[55px] " />
            <div>
              <p className=" font-medium text-sm font-montserrat">
                {item.title}
              </p>
              <p className=" text-gray-500 text-xs">{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
