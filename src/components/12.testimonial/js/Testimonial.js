import React from "react";
import titleImg from "../img/diamond.png";
import clientImg from "../img/client1.jpg";
import SliderForTestiminial from "./SliderForTestiminial";

export default function Testimonial() {
  const dataForTestimonial = [
    {
      customerImg: clientImg,
      customerName: "Rachel",
      customerRole: "Customer",
      commentTitle: "They delivered best quality",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum facilis alias! Est exercitationem tempore, fugiat accusantium neque eum autem reiciendis sequi qui esse hic eveniet minima explicabo, omnis dolorum!",
    },
    {
      customerImg: clientImg,
      customerName: "Kumar",
      customerRole: "Customer",
      commentTitle: "They delivered best quality",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum facilis alias! Est exercitationem tempore, fugiat accusantium neque eum autem reiciendis sequi qui esse hic eveniet minima explicabo, omnis dolorum!",
    },
    {
      customerImg: clientImg,
      customerName: "Sheady",
      customerRole: "Customer",
      commentTitle: "They delivered best quality",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum facilis alias! Est exercitationem tempore, fugiat accusantium neque eum autem reiciendis sequi qui esse hic eveniet minima explicabo, omnis dolorum!",
    },
    {
      customerImg: clientImg,
      customerName: "Wayne",
      customerRole: "Customer",
      commentTitle: "They delivered best quality",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum facilis alias! Est exercitationem tempore, fugiat accusantium neque eum autem reiciendis sequi qui esse hic eveniet minima explicabo, omnis dolorum!",
    },
    {
      customerImg: clientImg,
      customerName: "Modoch",
      customerRole: "Customer",
      commentTitle: "They delivered best quality",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum facilis alias! Est exercitationem tempore, fugiat accusantium neque eum autem reiciendis sequi qui esse hic eveniet minima explicabo, omnis dolorum!",
    },
  ];
  return (
    <div className=" w-full relative pt-16">
      <div className=" w-full  mx-auto sm:w-10/12">
        <h1 className=" text-4xl font-semibold w-full text-center px-5 text-[#212529]">
          Their Words, Our Pride
        </h1>
        <div className=" w-full flex items-center justify-center mt-2">
          <img src={titleImg} alt="titleImg" />
        </div>
        <p className=" w-full text-center px-10 text-gray-600 mt-2">
          Happy Words of our Happy Customers
        </p>
        <div className=" w-full">
          <SliderForTestiminial data={dataForTestimonial} />
        </div>
      </div>
    </div>
  );
}
