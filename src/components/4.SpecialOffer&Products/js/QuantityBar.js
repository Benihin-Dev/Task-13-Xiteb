import React from "react";

export default function QuantityBar({ totalQty, balanceQty }) {
  const balancePercentage = (balanceQty / totalQty) * 100;

  return (
    <div className=" w-full bg-[#eeeeee] rounded-xl overflow-hidden h-[16px]">
      <div
        className=" h-full bg-[#e6154b] duration-200 ease-linear rounded-xl"
        style={{ width: `${balancePercentage}%` }}
      ></div>
    </div>
  );
}
