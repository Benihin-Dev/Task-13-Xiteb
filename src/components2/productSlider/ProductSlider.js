import React from "react";
import "./productSlider.css";
import SliderForProductas from "./SliderForProductas";
import sideImg from "../assets/img/2.png";
import { useInView } from "react-intersection-observer";

export default function ProductSlider() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const productData = [
    {
      name: "Selfie Makeup",
      image:
        "https://klinegroup.com/wp-content/uploads/2016/04/MakeUpForever.png",
      price: "41",
      rate: 3,
    },
    {
      name: "MakeUp Foundation",
      image:
        "https://post.healthline.com/wp-content/uploads/2021/01/479762-What-is-Hypoallergenic-Makeup-Plus-the-Best-Products-of-2021-RMS-Beauty-Cream-Eye-Polish.png",
      price: "20",
      rate: 5,
    },
    {
      name: "Rozza Makeup",
      image:
        "https://www.rozzamakeup.com/static/media/products.bb9049ac5571a145e402.png",
      price: "520",
      rate: 4,
    },
    {
      name: "Gel Fixuture",
      image:
        "https://media.glamour.com/photos/65553148de77839019280bf2/3:4/w_320%2Cc_limit/Kush.png",
      price: "45",
      rate: 2,
    },
    {
      name: "Capsule Makeup",
      image:
        "https://www.nancyjoseph.com/wp-content/uploads/2024/03/BLOG.arbonnebeautybundle.png",
      price: "120",
      rate: 5,
    },
    {
      name: "Scrolled Powder",
      image:
        "https://sdcdn.io/mac/us/mac_sku_SK3711_1x1_0.png?width=1080&height=1080",
      price: "10",
      rate: 4,
    },
    {
      name: " Hypoaller  Makeup",
      image:
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/01/479762-What-is-Hypoallergenic-Makeup-Plus-the-Best-Products-of-2021-Neutrogena-Oil-Free-Liquid-Eye-Makeup-Remover.png?h=840",
      price: "87",
      rate: 5,
    },
    {
      name: "OFFICE Makeups",
      image:
        "https://officemakeups.com/storage/images/Products/black-curling-mascara.png",
      price: "63",
      rate: 3,
    },
    {
      name: "Maybelline New York",
      image:
        "https://www.maybelline-me.com/-/media/project/loreal/brand-sites/mny/apac/mena/homepage/full-width-carousel/lash-sensational.png?rev=7a48b5f82af2446d9ecd270756ed9b1f&cx=0.54&cy=0.5&cw=600&ch=600&hash=BB770E0B3F70D706DA4EE7AE010DB50D",
      price: "23",
      rate: 4,
    },
    {
      name: "Maybelline India",
      image:
        "https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/lip-makeup/lip-color/superstay-vinyl-ink/modules/product-info/6902395832669-11.png?rev=b6588438722a4137939b456c6b0f214c&cx=0&cy=0&cw=315&ch=315&hash=A20B31E182A9813D8649B15F0A44FC4E",
      price: "123",
      rate: 5,
    },
    {
      name: "AMU ES Blender",
      image:
        "https://i0.wp.com/nailitlikeapro.com/wp-content/uploads/2020/10/AMU-ES-Blender-Blue.png?fit=1766%2C1946&ssl=1",
      price: "25",
      rate: 2,
    },
  ];
  return (
    <div className=" w-full py-16 relative">
      <div className=" w-full sm:px-0 sm:w-11/12 mx-auto">
        <div className=" p-5 w-full relative ">
          <p className=" font-allura text-[#fce7df]  mb-5  text-center text-6xl lg:text-7xl">
            ProduTs
          </p>
          <p className="  absolute left-0 top-[50%] px-3 text-2xl w-full text-center leading-6 ">
            WHAT`S NEW FOR YOU
          </p>
          <p className=" px-8 mx-auto  mt-4  border-[#2c2c2c] border-b-2 w-fit"></p>
        </div>
        <SliderForProductas data={productData} />
        <div className=" mt-5 w-full flex items-center justify-center">
          <button className="  px-8 py-2 hover:bg-[#2c2c2cde] hover:text-white duration-200  bg-[#ffffffd0] text-black border-[#2c2c2c] text-sm border shadow-md mt-8">
            FIND MORE
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className={`animated-componentFromLeft ${
          inView ? "is-visible" : ""
        } absolute bottom-[80%]  right-[65%] sm:right-[85%]  sm:w-[25vw] w-[60vw] `}
      >
        <img
          src={sideImg}
          alt=""
          className=" size-full object-contain rotate-45"
        />
      </div>
    </div>
  );
}
