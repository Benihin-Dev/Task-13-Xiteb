import React from "react";
import { SiGoogleplay } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import deliveryImg from "../img/delivery.png";

export default function OnlineOrder() {
  return (
    <div className=" w-full relative py-10 group bg-[#f1fbff]">
      <div className="responsiveWeith">
        <div className=" w-full md:flex items-start">
          <div className=" w-full md:w-1/2">
            <p className="  text-5xl font-medium uppercase">
              ORDER <span className=" text-[#c41f3a]">ONLINE ANYTIME</span> AND
              GET
              <span className=" text-[#c41f3a]">FASTER</span> THAN OTHERS...
            </p>
            <p className=" mt-4 text-[20px] leading-9">
              Experience the convenience of ordering your favorite frozen foods
              anytime, anywhere.{" "}
              <span className=" text-[#c41f3a]">
                At Frozen Forts, we prioritize speedy delivery to ensure your
                products arrive fresher and faster than our competitors.
              </span>{" "}
              With our reliable and efficient service, you can enjoy top-quality
              frozen foods without the wait.,{" "}
              <span className=" text-[#c41f3a]">
                Place your order now and taste the
              </span>
              difference in every bite!
            </p>
            <div className=" w-full lg:flex items-center gap-10 mt-4">
              <div className=" flex  w-fit items-center gap-5 border rounded-md py-5 px-10 text-white hover:text-[#c41f3a] duration-200 cursor-pointer bg-[#333333]">
                <SiGoogleplay className=" size-8" />
                <div>
                  <p className=" text-xl leading-3 font-medium">GET IN ON</p>
                  <p className=" text-3xl font-semibold leading-6 mt-2">
                    Google Play
                  </p>
                </div>
              </div>
              <div className=" mt-1 lg:mt-0 flex  w-fit items-center gap-5 border rounded-md py-5 px-10 text-white duration-200 bg-[#c41f3a]  cursor-pointer">
                <FaApple className=" size-10" />
                <div>
                  <p className=" text-xl leading-3 font-medium">
                    Download on the
                  </p>
                  <p className=" text-3xl font-semibold leading-6 mt-2">
                    App Store
                  </p>
                </div>
              </div>
            </div>
            <p className=" text-2xl mt-5 font-medium">
              DOWNLOAD <span className=" text-[#c41f3a]">OUR APP</span> FOR
              ORDER...
            </p>
          </div>
          <div className=" w-full md:w-1/2">
            <img
              src={deliveryImg}
              alt=""
              className=" p-4   object-contain group-hover:-scale-x-100 duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
