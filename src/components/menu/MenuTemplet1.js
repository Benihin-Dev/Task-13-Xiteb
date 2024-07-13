import React from "react";

export default function Menu1({ data }) {
  return (
    <div className=" w-full py-10 relative">
      <div className=" w-full sm:w-10/12 sm:rounded-md overflow-hidden shadow-md   flex   justify-center   mx-auto    ">
        <div className="  w-full  sm:flex   justify-center ">
          <div className="  relative px-5 text-white sm:w-1/2 sm:pl-6 py-8 sm:py-0 ">
            <p className=" text-5xl mt-10  font-allura   leading-7">
              {data.name}
            </p>
            <p className=" text-xs leading-4  mt-4">{data.desc} </p>
            <ul className=" grid grid-cols-2 text-sm mt-8 gap-5">
              {data.items.map((item, index) => (
                <li
                  key={index}
                  className=" hover:text-[#cdb2b3] duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
            <button className=" mb-10 px-6 py-2 bg-[#2c2c2cde]  text-white duration-200  hover:bg-[#ffffffd0] hover:text-black border-[#ffffff] text-xs border shadow-md mt-8">
              EXPLORE MORE
            </button>
            <div className=" absolute  w-full h-full bg-[#2c2c2c] -z-10 top-0 left-0   flex items-end justify-end  ">
              <div className="w-[70%] h-[70%]  ">
                <img
                  src="https://static.wixstatic.com/media/0bfe51_dff72ac76ba14dabbc798f9958c1c5c1~mv2.png/v1/fill/w_280,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Lasting%20Impression%20Logo.png"
                  className=" brightness-0 object-contain h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="   h-[40vh] sm:h-full  overflow-hidden">
            <img
              src={data.img}
              alt=""
              className=" duration-300 scale-125 hover:scale-100  h-full    object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
