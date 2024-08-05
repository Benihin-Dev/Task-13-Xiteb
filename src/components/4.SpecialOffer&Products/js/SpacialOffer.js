import React from "react";
import QuantityBar from "./QuantityBar";
import Timer from "./Timer";

export default function SpacialOffer({ data }) {
  return (
    <div className=" w-full py-8   border-x-[3px] border rounded-2xl shadow-lg border-[#e6154b] p-5 overflow-hidden">
      <div className=" sm:flex lg:block items-center gap-8">
        <div className=" w-full sm:w-1/2  lg:w-full">
          <div className=" flex justify-between items-center leading-6 text-lg">
            <p>
              Special <br /> Offer
            </p>
            <div className=" text-white bg-[#e6154b] p-3 rounded-full size-16  flex items-center justify-center">
              <div>
                <p className=" text-sm  w-full text-center leading-4">save</p>
                <p className=" font-bold w-full text-center leading-4">
                  ${data.actualPrice - data.salePrice}
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <img src={data.img} className=" w-full object-contain" alt="" />
          </div>
        </div>
        <div className="  w-full sm:w-1/2 lg:w-full">
          <p className=" text-center text-sm font-semibold w-full leading-4 sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto text-[#007bcd]">
            {data.name}
          </p>
          <div className=" flex items-center justify-center gap-1 my-4">
            <p className=" text-gray-600 line-through">${data.actualPrice}</p>
            <p className=" text-2xl text-[#ee1200]">${data.salePrice}</p>
          </div>
          <div>
            <div className=" w-full flex items-center justify-between gap-10 pb-1">
              <p className=" text-xs leading-3 ">
                Available:
                <span className=" font-bold"> {data.balanceQty}</span>
              </p>
              <p className=" text-xs leading-3 ">
                Already Sold:
                <span className=" font-bold">
                  {data.totalQty - data.balanceQty}
                </span>
              </p>
            </div>
            <QuantityBar
              balanceQty={data.balanceQty}
              totalQty={data.totalQty}
            />
            <div className=" mt-4 mb-2">
              <p className=" text-gray-700 text-sm w-full text-center pb-2">
                Hurry Up! Offer Ends in:
              </p>
              <Timer endDate={data.endDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
