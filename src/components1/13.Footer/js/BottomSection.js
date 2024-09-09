import React from "react";
import paymentImg from "../img/payment.png";

export default function BottomSection() {
  return (
    <div className=" w-full px-5 sm:px-10 py-4">
      <div className=" md:flex items-center justify-between gap-10">
        <p className=" text-sm text-[#66bc89] w-full text-center md:text-start md:w-fit">
          © Copyrights 2024 All rights reserved. Powered by xCommerz™
        </p>
        <img src={paymentImg} className=" h-8" alt="" />
      </div>
    </div>
  );
}
