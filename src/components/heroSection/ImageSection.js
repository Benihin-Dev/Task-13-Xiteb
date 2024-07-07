import React from "react";

export default function ImageSection() {
  return (
    <div className="slideFromRight md:w-1/2 flex items-center justify-center pr-20 sm:pr-24  mt-10 md:mt-0 pb-20">
      <div className=" w-4/5 md:w-3/4 lg:w-1/2 pr-16 aspect-square relative  ">
        <div className="   h-full rounded-lg overflow-hidden ">
          <img
            src="https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2022/09/iStock-1320944243_wp-1024x676.jpg"
            alt=""
            className=" w-full h-full object-cover hover:scale-105 duration-200"
          />
          <div className=" absolute top-[100%] left-[20%]  pr-16 w-full h-full">
            <div className=" w-full h-full bg-red-400 rounded-lg overflow-hidden">
              <img
                src="https://www.shutterstock.com/image-photo/female-student-glancing-back-while-600nw-2001904067.jpg"
                alt=""
                className=" w-full h-full object-cover hover:scale-105 duration-200"
              />
            </div>
          </div>
        </div>
        <div className=" absolute top-[20%] left-[70%]  pr-16 w-full h-full">
          <div className=" w-full h-full bg-black rounded-lg overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/group-college-students-studying-school-library-study-friends-education-concept_522218-1465.jpg"
              alt=""
              className=" w-full h-full object-cover hover:scale-105 duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
