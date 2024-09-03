import React from "react";
import { HiStar } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { BiBarChart } from "react-icons/bi";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { LuShoppingBasket } from "react-icons/lu";

export default function ProductTemplet({ productDetails }) {
  return (
    <div className=" w-full   cursor-default mt-4 p-5 ">
      <div className=" relative group  ">
        <img
          src={productDetails.img[1]}
          alt=""
          className=" px-5 cursor-pointer w-full object-contain"
        />
        <img
          src={productDetails.img[0]}
          alt=""
          className=" px-5 cursor-pointer w-full object-contain group-hover:opacity-0 absolute top-0 left-0 bg-white  duration-300  "
        />
        {productDetails.productState === "hot" ? (
          <p className=" text-white px-3 rounded-full py-[2px] bg-[#f00000] text-[11px] font-semibold  absolute -top-5 -left-2">
            HOT
          </p>
        ) : productDetails.productState === "sold out" ? (
          <p className=" bg-[#d6d8db] px-3 rounded-full py-[2px]   text-white text-[11px] font-semibold  absolute -top-5 -left-2">
            SOLD OUT
          </p>
        ) : productDetails.productState === "sale" ? (
          <p className=" bg-[#103178] px-3 rounded-full py-[2px]   text-white text-[11px] font-semibold  absolute -top-5 -left-2">
            SALE
          </p>
        ) : (
          ""
        )}

        <div className="slideFromRight2 hidden lg:group-hover:flex absolute w-full items-center h-full   justify-end  top-0 right-0">
          <div className="   space-y-2">
            <div className=" rounded-full wishlist relative size-7 bg-[#eef0f3cf] text-[#66bc89] cursor-pointer flex items-center justify-center ">
              <CiHeart className="hover:text-[#103178] size-6" />
              <div className=" wishlistChild opacity absolute top-1 right-[120%]  group ">
                <div className="  bg-[#eef0f3cf]  py-[3px] px-2 text-[10px] rounded-sm  relative font-semibold">
                  Wishlist
                  <div className="  absolute top-[8px] triangle rotate-90 left-[100%]   "></div>
                </div>
              </div>
            </div>
            <div className=" rounded-full wishlist relative size-7 bg-[#eef0f3cf] text-[#66bc89] cursor-pointer flex items-center justify-center ">
              <BiBarChart className="hover:text-[#103178] size-[22px]" />
              <div className=" wishlistChild opacity absolute top-1 right-[120%]  group ">
                <div className="  w-full bg-[#eef0f3cf]  py-[3px] px-2 text-[10px] rounded-sm  relative font-semibold">
                  <p className=" w-[90px] text-center">Add to Compare</p>
                  <div className="  absolute top-[8px] triangle rotate-90 left-[100%]   "></div>
                </div>
              </div>
            </div>
            <div className=" rounded-full wishlist relative size-7 bg-[#eef0f3cf] text-[#66bc89] cursor-pointer flex items-center justify-center ">
              <PiMagnifyingGlassLight className="hover:text-[#103178] size-6" />
              <div className=" wishlistChild opacity absolute top-1 right-[120%]  group ">
                <div className="   bg-[#eef0f3cf] py-[3px] px-2 text-[10px] rounded-sm  relative font-semibold">
                  <p className=" w-[60px] text-center">Quick View</p>
                  <div className="  absolute top-[8px] triangle rotate-90 left-[100%]   "></div>
                </div>
              </div>
            </div>
            <div className=" rounded-full wishlist relative size-7 bg-[#eef0f3cf] text-[#66bc89] cursor-pointer flex items-center justify-center ">
              <LuShoppingBasket className="hover:text-[#103178] size-6" />
              <div className=" wishlistChild opacity absolute top-1 right-[120%]   group ">
                <div className=" bg-[#eef0f3cf] py-[3px] px-2 text-[10px] rounded-sm  relative font-semibold">
                  <p className=" w-16 text-center">Add to Cart</p>
                  <div className="  absolute top-[8px] triangle rotate-90 left-[100%]   "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className=" text-[#103178]  h-12 mt-2 text-sm leading-4 ">
          {productDetails.name}
        </p>
        {productDetails.salePrice && (
          <div className="  flex items-center gap-1">
            <p className=" text-[#103178]   leading-6 mt-3 font-semibold">
              ${productDetails.salePrice}
            </p>
            <p className=" text-[#9fa1a3]  text-sm line-through  leading-6 mt-3 ">
              ${productDetails.price}
            </p>
          </div>
        )}{" "}
        {!productDetails.salePrice && (
          <div className="  flex items-center gap-1">
            <p className=" text-[#66bc89]   leading-6 mt-3 font-semibold">
              ${productDetails.price}
            </p>
          </div>
        )}
        <div className=" flex mt-3">
          {Array.from({ length: 5 }, (_, index) =>
            index < productDetails.rate ? (
              <HiStar key={index} className="text-[#103178] size-[14px]" />
            ) : (
              <HiStar key={index} className="text-gray-300  size-[14px]" />
            )
          )}
        </div>
      </div>
      <div className="  lg:hidden mt-4  w-full">
        <div className=" flex items-center gap-2 ">
          <div className=" rounded-full wishlist relative size-7 bg-[#eef0f3cf] text-[#66bc89] cursor-pointer flex items-center justify-center ">
            <LuShoppingBasket className="hover:text-[#103178] size-6" />
            <div className=" wishlistChild opacity absolute top-1 right-[120%]   group ">
              <div className=" bg-[#eef0f3cf] py-[3px] px-2 text-[10px] rounded-sm  relative font-semibold">
                <p className=" w-16 text-center">Add to Cart</p>
                <div className="  absolute top-[8px] triangle rotate-90 left-[100%]   "></div>
              </div>
            </div>
          </div>
          <div className=" rounded-full wishlist relative size-7 bg-[#eef0f3cf] text-[#66bc89] cursor-pointer flex items-center justify-center ">
            <CiHeart className="hover:text-[#103178] size-6" />
            <div className=" wishlistChild opacity absolute top-1 right-[120%]  group ">
              <div className="  bg-[#eef0f3cf]  py-[3px] px-2 text-[10px] rounded-sm  relative font-semibold">
                Wishlist
                <div className="  absolute top-[8px] triangle rotate-90 left-[100%]   "></div>
              </div>
            </div>
          </div>
          <div className=" rounded-full wishlist relative size-7 bg-[#eef0f3cf] text-[#66bc89] cursor-pointer flex items-center justify-center ">
            <BiBarChart className="hover:text-[#103178] size-[22px]" />
            <div className=" wishlistChild opacity absolute top-1 right-[120%]  group ">
              <div className="  w-full bg-[#eef0f3cf]  py-[3px] px-2 text-[10px] rounded-sm  relative font-semibold">
                <p className=" w-[90px] text-center">Add to Compare</p>
                <div className="  absolute top-[8px] triangle rotate-90 left-[100%]   "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
