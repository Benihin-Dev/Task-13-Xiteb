import React from "react";

export default function Subscribe() {
  return (
    <div className=" w-full py-16 relative bg-[#fdfbf9]">
      <div className="responsiveWeith md:flex py-16  px-8 border border-[#ffa101] border-dashed bg-[#fdf6ec]">
        <div className=" md:w-1/3 flex items-center justify-center">
          <img
            src="https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/45232433103973c72b8d97ad13f77faebdd994bb/4ccd9/assets/images/subscribe-image.png"
            alt=""
            className=" w-10/12  md:w-9/12  object-contain"
          />
        </div>
        <div className=" md:w-2/3 mt-5 md:mt-0">
          <p className=" w-full text-center md:text-start font-semibold text-3xl md:text-4xl">
            Subscribe For Pizza Offer
          </p>
          <p className=" w-full text-center md:text-start text-gray-600 mt-8 text-lg">
            Please join our exclusinve and private member group where we offer
            exciting pizza offer every week. So don't miss it and subscribe now
            for your next pizza offer.
          </p>
          <div className=" group w-10/12 md:w-8/12 mt-5 mx-auto md:mx-0   border-4 border-transparent hover:border-[#ffa20187] flex items-center ">
            <input
              type="text"
              className=" outline-none text-lg px-4 py-2 w-3/5  border border-r-transparent  group-hover:border-transparent"
              placeholder="Enter Your Name"
              name=""
              id=""
            />
            <div className=" relative border group-hover:border-transparent border-l-transparent  cursor-pointer  justify-center py-[7px] w-2/5 px-6 flex items-center gap-2 overflow-hidden bg-[#ffa101] findRestaurantBtnParent">
              <p className=" text-lg font-semibold mt-1 text-center text-white">
                SUBSCRIBE
              </p>
              <div className=" w-3 h-20 rounded-full absolute -top-5 duration-300   rotate-12 findRestaurantBtnChild"></div>
            </div>
          </div>
          <p className=" text-gray-400 text-center  md:text-start w-full  mt-7">
            We hate spam and your email protected by us!
          </p>
        </div>
      </div>
    </div>
  );
}
