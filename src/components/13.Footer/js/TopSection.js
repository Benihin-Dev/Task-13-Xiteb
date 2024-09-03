import React from "react";
import { BsHandbag } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";

export default function TopSection() {
  const topSectionData = [
    { icon: <GiMoneyStack className=" size-6" />, text: "100% Money back" },
    { icon: <BsHandbag className=" size-6" />, text: "Non-contact shipping" },
    {
      icon: <TbTruckDelivery className=" size-6" />,
      text: "Free delivery for order over $200",
    },
  ];
  return (
    <div className=" w-full bg-white">
      <div className=" w-full py-10 grid  md:grid-cols-3 text-sm text-[#66bc89] ">
        {topSectionData.map((item, index) => (
          <div
            key={index}
            className={` ${
              index === 2
                ? " "
                : "md:border-r md:border-r-gray-300 border-b md:border-b-transparent border-b-gray-300"
            } py-3 w-full bg-[#f0f2f5] cursor-pointer hover:text-[#103178] flex items-center justify-center gap-3 `}
          >
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
