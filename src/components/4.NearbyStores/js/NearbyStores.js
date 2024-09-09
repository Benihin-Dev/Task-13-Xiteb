import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Templet from "./Templet";

export default function NearbyStores() {
  const details = [
    {
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/b5bb2d933190f9b8f8761587159a57ebf3dd714b/554d8/assets/images/shop/1.jpg",
      title: "Star Fast Food",
      items: ["Pizza", "Desserts", "Asian"],
      deliveryFee: 10,
      rating: "5.00",
      offer: "Free Delivery",
    },
    {
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/d8ef8371589b515016d35e40467e4c691c806f9a/dddbf/assets/images/shop/2.jpg",
      title: "Meat Lover",
      items: ["Pizza", "Desserts", "Asian"],
      deliveryFee: 10,
      rating: "4.90",
      offer: "5% OFF",
    },
    {
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/5f2b34d6f6d6a42ad40a8c3c7a58cdffb1f6d342/594c0/assets/images/shop/3.jpg",
      title: "Dining Divas",
      items: ["Pizza", "Desserts", "Asian"],
      deliveryFee: 10,
      rating: "5.00",
      offer: "15% OFF",
    },
    {
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/08788bd050c759c8aa8c9211607193c433f4e35c/fc618/assets/images/shop/4.jpg",
      title: "Roadside Pickups",
      items: ["Pizza", "Desserts", "Asian"],
      deliveryFee: 10,
      rating: "5.00",
      offer: "20% OFF",
    },

    {
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/1427d94437a0dd53b1063737d7431eb0008ccb0b/381c9/assets/images/shop/5.jpg",
      title: "Serious Food",
      items: ["Pizza", "Desserts", "Asian"],
      deliveryFee: 10,
      rating: "4.98",
      offer: "Free Delivery",
    },
    {
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/8ef14d8d0c15a19ad4f657df6d1e718bb1ebb073/19a3a/assets/images/shop/6.jpg",
      title: "Roadside Dine",
      items: ["Pizza", "Desserts", "Asian"],
      deliveryFee: 10,
      rating: "4.9",
      offer: "Free Delivery",
    },
    {
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/76ca3a98578b41476201f6c4b6f74b0d9e50429c/16263/assets/images/shop/7.jpg",
      title: "Perfect Setting",
      items: ["Pizza", "Desserts", "Asian"],
      deliveryFee: 10,
      rating: "4.75",
      offer: "25% OFF",
    },
    {
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/06c1e2dc0135db6c73d792fd22f0442f50c00a0c/6980d/assets/images/shop/8.jpg",
      title: "Love Shack",
      items: ["Pizza", "Desserts", "Asian"],
      deliveryFee: 10,
      rating: "4.85",
      offer: "35% OFF",
    },
    {
      img: "https://themes.xcommerz.com/pizza-shop/d33wubrfki0l68.cloudfront.net/b5bb2d933190f9b8f8761587159a57ebf3dd714b/554d8/assets/images/shop/1.jpg",
      title: "Mad Pizza",
      items: ["Cold Bevarages", "Desserts", "Pizza"],
      deliveryFee: 10,
      rating: "5.00",
      offer: "35% OFF",
    },
  ];
  return (
    <div className=" w-full py-10 relative bg-[#fdfbf9]">
      <div className="responsiveWeith ">
        <div className="sm:flex items-center gap-10 justify-between">
          <p className=" text-3xl md:text-4xl font-semibold">Nearby Stores</p>
          <div className=" text-[#ffa101] border border-[#ffa101] w-fit py-1 px-5 bg-white hover:bg-gray-100 cursor-pointer flex items-center gap-1 duration-300 hover:gap-3">
            <p className=" text-lg">View All</p>
            <IoIosArrowRoundForward className=" size-6" />
          </div>
        </div>
        <div className=" grid mt-12 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {details.map((detail, index) => (
            <Templet details={detail} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
