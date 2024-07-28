import React from "react";
import Menu1 from "./MenuTemplet1";
import Menu2 from "./MenuTemplet2";

export default function Menu() {
  const faceItemsMenuData = {
    name: " Make-up Items",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit nesciunt eius pariatur obcaecati? ",
    img: "https://lh3.googleusercontent.com/proxy/bHKD57kW7JKjGbl4BL1f8MpXiTi9JZIuuw17T1fzCowe3OkpCK5hcjg4N5ETNUuk9ydgnbPVgGQLMTWn89pO2AfgfeH0QoLts0OAWJp3mddp95JuWwhLEhwtVwKbZjBQ0tqii-c5",
    items: [
      "Foundation",
      "Concealer",
      "Blush",
      "Eyeshadow",
      "Eyeliner",
      "Mascara,Lipstick",
      "Lip Gloss",
      "Lip Liner",
    ],
  };
  const hairItemsMenuData = {
    name: "Haircare Items",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit nesciunt eius pariatur obcaecati? ",
    img: "https://images.summitmedia-digital.com/preview/images/2021/12/22/preview-beauty-awards-hair-nm.jpg",
    items: [
      "Shampoos",
      "Conditioners",
      " Hair Treatments",
      "Styling Products",
      "Cleansers",
      "Toners",
      "Moisturizers",
      " Serums & Treatments",
    ],
  };
  return (
    <div className=" w-full py-5">
      <Menu1 data={hairItemsMenuData} />
      <Menu2 data={faceItemsMenuData} />
    </div>
  );
}
