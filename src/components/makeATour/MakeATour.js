import React from "react";

export default function MakeATour() {
  return (
    <div className=" w-full pt-10 pb-80 sm:pb-8">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto ">
        <div className=" sm:flex items-center justify-end relative ">
          <div className=" sm:w-7/12 aspect-square flex items-center">
            <img
              src="https://img.freepik.com/premium-photo/students-walking-class-university-college-environment-moving-crowd-blurred-background_873668-1870.jpg"
              alt=""
              className=" w-full h-[70%] object-cover  rounded-md overflow-hidden"
            />
          </div>
          <div className="absolute top-[80%]  w-full h-full left-0  sm:top-0  flex items-center justify-start  ">
            <div className="sm:w-2/4 space-y-3 bg-[#f3f3f3f2] shadow-md border rounded-lg  py-8 lg:py-10  px-8   ">
              {" "}
              <p className=" text-gray-400">CAMPUS INFORMATION</p>
              <p className=" text-2xl lg:text-4xl font-bold">
                Where Knowledge Meets Innovation
              </p>
              <p className=" leading-5 pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                fugiat ad reprehenderit corrupti non iusto neque ipsum eveniet
                voluptate libero perspiciatis veritati
              </p>
              <button className=" text-white hover:bg-green-500 duration-200 bg-[#4534a9] py-2 px-6 rounded-full border ">
                Shedule Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
