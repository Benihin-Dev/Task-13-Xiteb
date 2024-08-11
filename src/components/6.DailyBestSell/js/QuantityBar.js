import React from "react";

export default function QuantityBar({ totalQty, balanceQty }) {
  const balancePercentage = (balanceQty / totalQty) * 100;

  return (
    <div className=" w-full bg-[#eeeeee] rounded-sm overflow-hidden h-[5px]">
      <div
        className=" h-full bg-[#2faf36] duration-200 ease-linear  rounded-sm"
        style={{ width: `${balancePercentage}%` }}
      ></div>
    </div>
  );
}
