import React from "react";
import supportImg from "../img/customer-support.png";
import returnImg from "../img/delivery-status.png";
import freeShippingImg from "../img/free-shipping.png";
import currencyImg from "../img/money.png";

export default function Features() {
  const data = [
    {
      img: freeShippingImg,
      title: "Free Shipping",
      desc: "Free Shipping for orders over $13",
    },
    {
      img: returnImg,
      title: "Returns Policy",
      desc: "Within 30 days for an exchange",
    },
    {
      img: supportImg,
      title: "Online Support",
      desc: "24 hours a day, 7 days a week",
    },
    {
      img: currencyImg,
      title: "Flexible Payment",
      desc: "Pay with Multiple Credit Cards",
    },
  ];
  return (
    <div className=" w-full relative py-5">
      <div className="responsiveWeith grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-[#f7f8fc] rounded py-5  ">
        {data.map((item, index) => (
          <div className=" w-full p-2">
            <div className=" w-full flex items-center justify-center">
              <img
                src={item.img}
                className={` ${index !== 0 ? "size-12 my-2" : ""}`}
                alt=""
              />
            </div>
            <div className=" w-full">
              <p className=" w-full text-center font-semibold">{item.title}</p>
              <p className=" w-full text-center text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
