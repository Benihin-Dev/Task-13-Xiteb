import React from "react";
import clientImg from "../img/fx_teste_1.jpg";
import bgImg from "../img/body-06.png";
import SliderForTestimonial from "./SliderForTestimonial";
import { useInView } from "react-intersection-observer";


export default function Testimonial() {
  const data = [
    {
      img: clientImg,
      comment:
        "Frozen Forts has the best ice cream and desserts I’ve ever tasted! The flavors are incredibly rich and creamy, and each bite is a burst of deliciousness. Whether I’m indulging in their classic vanilla bean or their exotic mango sorbet, I’m never disappointed. Plus, their packaging keeps everything perfectly frozen until it reaches my doorstep. Highly recommend for all dessert lovers! ",
      name: "MORIS JHONSON",
      position: "Web Developer",
    },
    {
      img: clientImg,
      comment:
        "Frozen Forts has the best ice cream and desserts I’ve ever tasted! The flavors are incredibly rich and creamy, and each bite is a burst of deliciousness. Whether I’m indulging in their classic vanilla bean or their exotic mango sorbet, I’m never disappointed. Plus, their packaging keeps everything perfectly frozen until it reaches my doorstep. Highly recommend for all dessert lovers! ",
      name: "JHON DE CASTRO",
      position: "Leader",
    },
    {
      img: clientImg,
      comment:
        "Frozen Forts has the best ice cream and desserts I’ve ever tasted! The flavors are incredibly rich and creamy, and each bite is a burst of deliciousness. Whether I’m indulging in their classic vanilla bean or their exotic mango sorbet, I’m never disappointed. Plus, their packaging keeps everything perfectly frozen until it reaches my doorstep. Highly recommend for all dessert lovers! ",
      name: "JASON SMITH",
      position: "App Developer",
    },
  ];
  const { ref, inView } = useInView({
    threshold: 0.07,
    triggerOnce: true,
  });
  return (
    <div className=" w-full relative py-10   ">
      <div
        ref={ref}
        className={`animated-component ${
          inView ? "is-visible" : ""
        } responsiveWeith `}
      >
        <p className=" text-center text-4xl font-medium uppercase">
          OUR
          <span className=" text-[#c41f3a]"> CLIENTS</span> REVIEW
        </p>
        <div className=" w-full mt-16">
          <SliderForTestimonial data={data} />
        </div>
      </div>
      <div className=" absolute  -top-[30%] xAxisMovingAnimation -z-10 left-5">
        <img src={bgImg} className=" w-96" alt="" />
      </div>
      <div className=" absolute top-0 left-0 w-full h-full bg-[#f1fbff] -z-20"></div>
    </div>
  );
}
