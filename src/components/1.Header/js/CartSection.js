import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function CartSection({ setCartState }) {
  const dataForCart = [
    {
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/760a15fa9d463f69ab4cc137fc1d5c1ed4b6f9fa/b57a0/assets/images/product/1.png",
      name: "Mushroom pizza",
      qty: 3,
      price: 9,
    },
    {
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/d081fe27b3780910e989778070416018673c090d/b924b/assets/images/product/2.png",
      name: "Chicken Pizza",
      qty: 2,
      price: 5,
    },
    {
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/ebf934cda04538873748e74e2765f4b830aa7370/57252/assets/images/product/7.png",
      name: "Sauce Pizza",
      qty: 1,
      price: 8,
    },
  ];
  return (
    <div className=" w-full bg-white h-screen p-4">
      <div className=" flex items-center justify-between gap-5 mt-4">
        <p className=" text-2xl font-medium">Shopping Cart</p>
        <RxCross2
          onClick={() => {
            setCartState(false);
          }}
          className=" size-7 cursor-pointer hover:rotate-90 duration-300 text-gray-500 hover:text-red-500"
        />
      </div>
      <div className=" space-y-3 mt-5">
        {dataForCart.map((item, index) => (
          <div className="  border-b flex items-center justify-between gap-5">
            <div key={index} className="w-4/5 flex items-center gap-2">
              <div className="w-2/5 flex items-center justify-center">
                <img
                  src={item.img}
                  alt=""
                  className="w-9/12 object-contain p-2"
                />
              </div>
              <div className="w-3/5">
                <p className=" text-lg text-gray-500 cursor-default">
                  {item.name}
                </p>
                <p className=" text-gray-500 cursor-default text-lg">
                  {item.qty} * ${item.price}
                </p>
              </div>
            </div>
            <div className="w-1/5 flex items-center justify-end">
              <RxCross2 className=" size-5 text-gray-400 cursor-pointer hover:text-red-500 duration-200" />
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-8 flex itce justify-between gap-5 px-4 py-2 border-y">
        <p className=" font-bold text-lg">SUBTOTAL</p>
        <p className=" font-bold text-lg">$36</p>
      </div>

      <div className=" cursor-pointer relative w-full mt-4  justify-center py-2 px-6 flex items-center gap-2 overflow-hidden bg-[#ffa101] findRestaurantBtnParent">
        <p className=" text-lg font-semibold text-white mt-1">CHECKOUT</p>
        <div className=" w-5 h-20 rounded-full absolute -top-5 duration-300   rotate-12 findRestaurantBtnChild"></div>
      </div>
      <div className=" cursor-pointer relative w-full mt-4  justify-center py-2 px-6 flex items-center gap-2 overflow-hidden bg-white border border-[#ffa101] text-[#ffa101] hover:text-black  hover:bg-[#ffa101] findRestaurantBtnParent">
        <p className=" text-lg font-semibold  mt-1">VIEW CART</p>
        <div className=" w-5 h-20 rounded-full absolute -top-5 duration-300   rotate-12 findRestaurantBtnChild"></div>
      </div>
    </div>
  );
}
