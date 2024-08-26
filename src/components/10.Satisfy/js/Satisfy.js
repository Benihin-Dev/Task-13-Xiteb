import React from "react";
import { useInView } from "react-intersection-observer";

export default function Satisfy() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });
  return (
    <div className=" w-full py-20 relative ">
      <div
        ref={ref}
        className={`animated-component ${
          inView ? "is-visible" : ""
        }responsiveWeith  grid md:grid-cols-2 gap-10 `}
      >
        <p className=" text-start text-2xl md:text-4xl font-medium uppercase">
          SATISFY
          <span className=" text-[#c41f3a]"> YOUR SWEET TOOTH</span> WITH OUR
          <span className=" text-[#c41f3a]"> FROSTY</span>CREATION...
        </p>
        <p className=" text-lg text-center md:text-start md:text-xl leading-8">
          Experience the convenience of ordering your favorite frozen foods
          anytime, anywhere{" "}
          <span className=" text-[#c41f3a]">
            {" "}
            At Frozen Forts, we prioritize speedy delivery to ensure your
            products arrive fresher and faster than our competitors.
          </span>
          With our reliable and efficient service, you can enjoy top-quality
          frozen foods without the wait.
        </p>
      </div>
      <div className=" absolute top-0 left-0 w-full h-full bg-[#f1fbff] -z-20"></div>
    </div>
  );
}
