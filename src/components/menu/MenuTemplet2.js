import React from "react";

export default function Menu2({ data }) {
  return (
    <div className=" w-full relative pb-16">
      <div className=" w-full sm:w-10/12 border sm:rounded-md overflow-hidden shadow-md   flex   justify-center   mx-auto    ">
        <div className="  w-full  sm:flex   justify-center ">
          <div className="overflow-hidden">
            <img
              src={data.img}
              alt=""
              className="  duration-300 scale-125 hover:scale-100  h-full    object-cover "
            />
          </div>
          <div className="  px-5 sm:w-1/2 sm:pl-6 py-8 sm:py-0 relative ">
            <p className=" text-5xl mt-10  font-allura   leading-7">
              {data.name}
            </p>
            <p className=" text-xs leading-4  mt-4">{data.desc} </p>
            <ul className=" grid grid-cols-2 text-sm mt-8 gap-5">
              {data.items.map((item, index) => (
                <li
                  key={index}
                  className=" hover:text-[#835451] text-gray-700 duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
            <button className=" mb-10 px-6 py-2 hover:bg-[#2c2c2cde] border-[#2c2c2cde] border  hover:text-white duration-200   bg-[#ffffffd0]  text-black   text-xs   shadow-md mt-8">
              EXPLORE MORE
            </button>
            <div className=" absolute  w-full h-full  bg-[#fff6ec]  -z-10 top-0 left-0   flex items-end justify-end  ">
              <div className="w-[70%] h-[70%]  ">
                <img
                  src="https://i.pinimg.com/originals/da/80/f3/da80f360d44e8d6f9a045ecbd3e4de45.png"
                  className="   opacity-40 object-contain h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
