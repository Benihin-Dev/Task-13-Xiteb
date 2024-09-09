import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

export default function HeroContent() {
  function heroTextSection() {
    return (
      <div className="pl-5 px-5 sm:pl-10 md:pl-16 lg:pl-28 mt-5 sm:mt-20 w-full">
        <div className=" flex items-center justify-center sm:justify-start">
          <div className="flex bg-[#fddca4a6] items-center gap-3 text-[#ff8e28] w-fit py-1 px-4">
            <TbTruckDelivery className="size-7" />
            <p className="leading-3 font-semibold text-gray-500">
              Fastest Delivery Guaranteed
            </p>
          </div>
        </div>
        <p className="cursor-default text-5xl text-center sm:text-start sm:text-6xl mt-6 font-semibold text-[#1e1d23]">
          Welcome to <span className="text-[#ffa101]">Our</span>
          <br /> Restaurant
        </p>
        <p
          className="text-gray-500  text-lg
            pr-10 mt-5 text-center sm:text-start w-full sm:w-fit"
        >
          Get 10% instant off for all orders and $200 signup bonus today for new
          registration!
        </p>
        <div className="w-full flex items-center gap-4 mt-6">
          <div>
            <img
              src="https://d33wubrfki0l68.cloudfront.net/e7a3497a883cd2fba055276bb72a7f072281af55/89d2a/assets/images/play-store.svg"
              alt="Play Store"
              className="object-contain"
            />
          </div>
          <div>
            <img
              src="https://d33wubrfki0l68.cloudfront.net/c8c52c11752708aa58dba13ffe5420ffb24ac6f3/842c5/assets/images/apps-store.svg"
              alt="App Store"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    );
  }

  function imageSection() {
    return (
      <img
        src="https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/c35759418e02165461461ce15e45179967cc58a5/e0965/assets/images/hero-image.png"
        alt="Hero"
        className="rotate w-full object-contain p-4 sm:p-8 lg:p-12"
      />
    );
  }
  return (
    <div className="w-full relative  pt-32 pb-16">
      <div className="sm:grid gap-8 grid-cols-2">
        <div className=" hidden sm:block">{heroTextSection()}</div>
        <div className="rounded-left-border hidden sm:block">
          {imageSection()}
        </div>
        <div className=" sm:hidden ">{imageSection()}</div>
        <div className="sm:hidden block">{heroTextSection()}</div>
      </div>
    </div>
  );
}
