import React from "react";
import { RiCustomerServiceLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCycle } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";

export default function Features() {
  const data = [
    {
      iocn: <TbTruckDelivery className=" size-8 text-gray-500" />,
      topTaxt: "Free Shipping ",
      bottomText: "Free for $50+ orders",
    },
    {
      iocn: <GiCycle className=" size-7 text-gray-500" />,
      topTaxt: "Easy Returns",
      bottomText: "14 Days easy return",
    },
    {
      iocn: <RiCustomerServiceLine className=" size-7 text-gray-500" />,
      topTaxt: "Fast Support",
      bottomText: "24/7 Customer support",
    },
    {
      iocn: <CiDiscount1 className=" size-8 text-gray-500" />,
      topTaxt: "Member Discount",
      bottomText: "Discount for elite members",
    },
  ];
  return (
    <div className=" w-full py-5 bg-[#f9f9f9]">
      <div className=" w-full mx-auto sm:size-10/12 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4  ">
        {data.map((item, index) => (
          <div
            key={index}
            className={` ${
              index === 0 ? "md:border-l-transparent border-t-transparent" : index === 3 ? "md:border-r-transparent border-b-transparent" : ""
            }  w-full py-3 flex gap-2 px-3 items-center md:justify-center border-t border-b md:border-l md:border-r md:border-b-transparent md:border-t-transparent sm:ustify-center `}
          >
            {item.iocn}
            <div>
              <p className=" font-semibold leading-4 text-[#262626] text-sm">
                {item.topTaxt}
                <br />
                <span className=" font-normal text-gray-500 text-xs">
                  {item.bottomText}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
