import React from "react";
import ProductTemplet from "./ProductTemplet";

export default function TopRatedProducts({ topRatedProductList }) {
  return (
    <>
      {topRatedProductList.map((product, index) => (
        <div
          key={index}
          className="  cursor-pointer  pt-3  my-2 relative h-max hover:shadow-lg hover:shadow-gray-400 duration-200 group bg-white hover:border"
        >
          <ProductTemplet product={product} hoverState={false} />
          <div className=" cursor-pointer absolute py-3 z-30 top-0 left-0 w-full hidden group-hover:block bg-white shadow-lg shadow-gray-400  ">
            <div className=" w-full relative">
              <ProductTemplet product={product} hoverState={true} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
