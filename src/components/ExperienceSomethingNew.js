import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useInView } from "react-intersection-observer";

export default function ExperienceSomethingNew() {
  const [expContents, setExpContents] = useState([
    {
      img: "https://www.hilton.com/im/en/SINORHI/14530273/f-por-157-heroimage-crop3-2.jpg?impolicy=crop&cw=1500&ch=1000&gravity=NorthWest&xposition=0&yposition=0&rw=2048&rh=1366",
      decs: "Experience the Stay",
      head: "",
      description:
        "Book our Experience the Stay package and indulge with an on-property credit, plus perks like Premium WiFi, free early departure, early check-in, and late check-out where available.",
      btn: "Veiw Offer details",
    },
    {
      img: "https://www.hilton.com/im/en/NoHotel/19032520/shutterstock-1991645033.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=0&rw=2048&rh=1366",
      decs: " Park & Stay",
      head: "",
      description:
        "Pack up the car and get ready for your getaway. With the Park & Stay offer, you'll have access to your car when you need it and a place to park when you don't, at participating hotels. Offer includes parking for one vehicle per room.",
      btn: "Veiw Offer details",
    },
    {
      img: "https://www.hilton.com/im/en/MBJRHHF/16722849/2021-lifestyle-shoot-at-hilton-rose-hall-resort-spa-an-all-inclusive-resort.jpg?impolicy=crop&cw=4874&ch=3333&gravity=NorthWest&xposition=62&yposition=0&rw=2048&rh=1400",
      decs: "Join Hilton Honors & Get Up to 3,000 Points",
      head: "Jumpstart Your Rewards With Up to 3,000 Points",
      description:
        "As a new Hilton member, you'll earn a Welcome Bonus of 1,000 Bonus Points on your first stay, plus an extra 2,000 Bonus Points after two stays. Plus, Hilton Honors members get more value with exclusive discounted rates, free WiFi, and so much more.",
      btn: "Join for Free",
    },
    {
      img: "https://www.hilton.com/im/en/AXAZBOL/18127576/family-pool-day-0199-v1.jpg?impolicy=crop&cw=2000&ch=1367&gravity=NorthWest&xposition=0&yposition=66&rw=2048&rh=1400",
      decs: "Advance Purchase Discount – save up to 17%",
      head: "Honors Discount Advance Purchase",
      description:
        "Save up to 17% off our Best Available Rate* when you make your reservation at least 7 days in advance. Pay less, do more during your next stay!",
      btn: "Veiw Offer details",
    },
    {
      img: "https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=4874&ch=3333&gravity=NorthWest&xposition=62&yposition=0&rw=2048&rh=1400",
      decs: "Multiply Your Points",
      head: "2X Points",
      description:
        "Receive double the Hilton Honors Points each night of your stay at any participating property when you book the 2X Points Package.",
      btn: "Book Now",
    },
    {
      img: "https://www.hilton.com/im/en/NoHotel/13984175/cheers-5000x3333.jpg?impolicy=crop&cw=4874&ch=3333&gravity=NorthWest&xposition=62&yposition=0&rw=2048&rh=1400",
      decs: "Free Bonus Points at new hotels",
      head: "",
      description:
        "Earn up to 5,000 additional Hilton Honors Points per stay when you book for three or more nights at select newly opened hotels.",
      btn: "View Offer Details",
    },
  ]);
  const [detailedShowWindowState, setDetailedShowWindowState] = useState(false);
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`animated-component ${
        inView ? "is-visible" : ""
      }  w-full relative `}
    >
      <div className=" w-11/12 mb-20 mt-20 mx-auto relative">
        <h1 className=" text-3xl text-indigo-700">Save more, do more</h1>
        <p className=" text-gray-600">
          Choose from our exclusive offers, and get more from your next stay.
        </p>
        <div
          ref={ref}
          className={` hidden sm:grid lg:grid  w-full h-full mt-8 overflow-auto sm:grid-cols-2 md:grid-cols-3 gap-5 relative`}
        >
          {expContents.map((content, index) => (
            <div
              onClick={() => {
                setSelectedContentIndex(index);
                setDetailedShowWindowState(!detailedShowWindowState);
              }}
              key={index}
              className={` relative sm:w-full h-[98%]  overflow-hidden`}
            >
              <img
                className=" object-contain"
                src={content.img}
                alt={`${content.decs}.png`}
              />
              <div className="flex absolute top-0 h-full w-full   gradiendColour  justify-center items-center">
                <div className=" w-full h-full flex items-end pb-4 justify-center bg-transparent  hover:translate-y-[-35px] duration-300">
                  <p className=" px-5 lg:px-10 text-white font-medium text-lg  text-center">
                    {content.decs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={ref}
          className={`animated-component ${inView ? "is-visible" : ""}
        sm:hidden mt-10 mb-32 flex relative overflow-x-scroll overflow-y-hidden h-[55vw]`}
        >
          <div className=" absolute overflow-hidden top-0 gap-2 flex">
            {expContents.map((content, index) => (
              <div
                onClick={() => {
                  setSelectedContentIndex(index);
                  setDetailedShowWindowState(!detailedShowWindowState);
                }}
                key={index}
                className=" w-[80vw] relative"
              >
                <img src={content.img} alt="" />
                <div className="flex absolute top-0 h-full w-full  gradiendColour  justify-center items-center">
                  <div className=" w-full h-full flex items-end pb-10 justify-center bg-transparent  hover:translate-y-[-50px] duration-300">
                    <p className=" px-5 lg:px-10 text-white font-medium text-lg  text-center">
                      {content.decs}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-10/12  mx-auto shadow-md h-3 rotate-180 mt-0 sm:mt-24"></div>
      </div>
      {detailedShowWindowState && (
        <div className=" absolute bg-[#414142bc] py-10 w-full h-[110%] sm:h-[115%] lg:h-[10%] top-[-50px]">
          <div className=" w-11/12 z-10 sm:w-8/12 lg:w-6/12 rounded mx-auto bg-white border p-5 relative">
            <div className="w-11/12 mx-auto flex justify-between pb-3">
              <p className=" text-lg text-center w-full border-b pb-2">
                {expContents[selectedContentIndex].decs}
              </p>
            </div>
            <RxCross2
              onClick={() => {
                setDetailedShowWindowState(!detailedShowWindowState);
              }}
              className=" absolute top-2 right-3 size-5 border rounded-md text-gray-500 hover:text-gray-800 hover:border-gray-600 duration-300"
            />
            <img
              src={expContents[selectedContentIndex].img}
              alt=""
              className=" w-full mx-auto  border rounded"
            />
            <div className=" w-full my-4 space-y-3">
              <p className=" text-lg sm:text-xl text-blue-600">
                {expContents[selectedContentIndex].head}
              </p>
              <p className=" text-xs lg:text-sm text-gray-600">
                {expContents[selectedContentIndex].description}
              </p>
              <div className=" w-full flex items-center justify-center">
                {" "}
                <button className=" py-1 px-4 bg-blue-900 text-white">
                  {expContents[selectedContentIndex].btn}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
