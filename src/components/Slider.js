import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MdArrowForwardIos, MdArrowBackIos, MdAddCard } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { LiaWineGlassAltSolid } from "react-icons/lia";
import { MdDinnerDining } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineDateRange } from "react-icons/md";

import img1 from "../img/slideImg1.jpg";
import img2 from "../img/slideImg2.jpg";
import img3 from "../img/slideImg3.jpg";
import img4 from "../img/slideImg4.png";

export default function Slider() {
  //Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 4);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  // Spacial Code Section
  const [codeTypeState, setCodeTypeState] = useState(false);
  const [specialCodeSelectionState, setSpecialCodeSelectionState] =
    useState(false);
  const [codeType, setCodeType] = useState("Corporate");
  const handleCodeTypeSelection = (e) => {
    setCodeType(e.target.innerHTML);
  };

  // Room Allocation
  const [adultsConut, setadultsConut] = useState(1);
  const [childConut, setChildConut] = useState(0);
  const [roomeMenuState, setRoomeMenuState] = useState(false);
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Room 1",
      adults: 1,
      children: 0,
    },
  ]);
  const [roomConut, serRoomCount] = useState(1);

  const addRoom = () => {
    setRooms([
      ...rooms,
      {
        id: rooms.length + 1,
        name: `Room ${rooms.length + 1}`,
        adults: 1,
        children: 0,
      },
    ]);
  };
  const handleDelete = (id) => {
    if (id === 1) {
    } else {
      setRooms(rooms.filter((room) => room.id !== id));
    }
  };
  function HandleAdultConut(method) {
    if (method === "-") {
      if (adultsConut === 1) {
      } else {
        setadultsConut(adultsConut - 1);
      }
    } else if (method === "+") {
      setadultsConut(adultsConut + 1);
    } else {
    }
    let conut = 1;
  }
  function HandleChildConut(method) {
    if (method === "-") {
      if (childConut === 0) {
      } else {
        setChildConut(childConut - 1);
      }
    } else if (method === "+") {
      setChildConut(childConut + 1);
    } else {
    }
    let conut = 1;
  }

  // Date Picker
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Slider Components
  const SliderImgComponent1 = () => {
    return (
      <div className=" w-screen relative">
        <img src={img1} alt="" className=" w-screen" />
        <div className=" absolute hidden sm:block top-[30%] w-full">
          <p className=" text-white md:text-lg  w-11/12 text-center">
            <span className=" text-4xl font-bold">Shangri-la Colombo</span>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            aliquam.
          </p>
        </div>
        <div className=" absolute hidden sm:block top-[65%] w-full">
          <p className=" text-white md:text-lg mx-auto font-medium  w-10/12 text-end">
            Discover More..
          </p>
        </div>
      </div>
    );
  };
  const SliderImgComponent2 = () => {
    return (
      <div className=" w-full relative">
        <img src={img3} alt="" className=" w-full" />
        <div className=" absolute hidden sm:block top-[30%] w-full">
          <p className=" text-white md:text-lg  w-11/12 text-center">
            <span className=" text-4xl font-bold">Shangri-la Colombo</span>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Id, aliquam. dolor sit amet consectetur adipisicing elit. Id,
            aliquam.
          </p>
        </div>
        <div className=" absolute hidden sm:block top-[65%] w-full">
          <p className=" text-white md:text-lg mx-auto font-medium  w-10/12 text-end">
            Discover More..
          </p>
        </div>
      </div>
    );
  };
  const SliderImgComponent3 = () => {
    return (
      <div className=" w-screen relative">
        <img src={img2} alt="" className=" w-screen" />
        <div className=" absolute hidden sm:block top-[30%] w-full">
          <p className=" text-white md:text-lg  w-11/12 text-center">
            <span className=" text-4xl font-bold">Shangri-la Colombo</span>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            aliquam.
          </p>
        </div>
        <div className=" absolute hidden sm:block top-[65%] w-full">
          <p className=" text-white md:text-lg mx-auto font-medium  w-10/12 text-end">
            Find your Shangri-la
          </p>
        </div>
      </div>
    );
  };
  const SliderImgComponent4 = () => {
    return (
      <div className=" w-screen relative font-mulish">
        <img src={img4} alt="" className=" w-screen" />
        <div className=" absolute hidden sm:block top-[30%]  w-screen">
          <p className=" text-white md:text-lg  w-11/12 text-center">
            <span className=" text-4xl font-bold">Rooms and Food</span>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            aliquam.
          </p>
        </div>
        <div className=" absolute hidden sm:block top-[65%] w-screen">
          <p className=" text-white md:text-lg mx-auto font-medium  w-10/12 text-end">
            Discover More..
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-screen relative overflow-hiden mb-16 ">
      <TransitionGroup className="slider flex">
        <CSSTransition key={currentSlide} classNames="slide flex" timeout={500}>
          <div className="slide">
            {currentSlide === 0 && <SliderImgComponent1 />}
            {currentSlide === 1 && <SliderImgComponent2 />}
            {currentSlide === 2 && <SliderImgComponent3 />}
            {currentSlide === 3 && <SliderImgComponent4 />}
          </div>
        </CSSTransition>
      </TransitionGroup>
      <MdArrowForwardIos
        onClick={handleNextClick}
        className="cursor-pointer size-12 z-[4] text-gray-200 hover:scale-110 duration-300 absolute top-[38%] right-3 sm:right-10"
      />
      <MdArrowBackIos
        onClick={handlePrevClick}
        className="cursor-pointer size-12 z-[4] text-gray-200 hover:scale-110 duration-300 absolute top-[38%]  left-3 sm:left-10"
      />
      <div className=" hidden sm:flex absolute top-[90%] w-full left-0 z-10 bg-white h-24"></div>
      <div className=" flex sm:hidden absolute top-[50%] w-full left-0    ">
        <div className=" cursor-pointer text-center gap-4 flex justify-center items-center px-1 py-1 rounded bg-[#ffffffca] mx-auto">
          Book a room now
          <CiSearch className=" size-6" />
        </div>
      </div>
      <div className=" flex sm:hidden absolute top-0 w-full left-0 bg-[#ffffff1e] pt-2 ">
        <p className="text-center w-full text-[#ffffff]">
          Shangri-la | Colombo
        </p>
      </div>
      <div className=" sm:hidden flex  absolute top-[90%] w-full left-0 pt-2   ">
        <div className=" w-10/12 border py-5 grid grid-cols-4 justify-center shadow text-sm z-[12] mx-auto bg-white">
          <div className="">
            <IoBedOutline className=" cursor-pointer mx-auto size-12 text-[#907e3c] rounded-full border-[#907e3c93] border p-2" />
            <p className=" text-center">Rooms</p>
          </div>
          <div className="">
            <MdDinnerDining className=" cursor-pointer mx-auto size-12 text-[#907e3c] rounded-full border-[#907e3c93] border p-2" />
            <p className=" text-center">Dining</p>
          </div>
          <div className="">
            <LiaWineGlassAltSolid className=" cursor-pointer mx-auto size-12 text-[#907e3c] rounded-full border-[#907e3c93] border p-2" />
            <p className=" text-center">Experience</p>
          </div>
          <div className="">
            <MdAddCard className=" cursor-pointer mx-auto size-12 text-[#907e3c] rounded-full border-[#907e3c93] border p-2" />
            <p className=" text-center">Offers</p>
          </div>
        </div>
      </div>
      <div className=" hidden sm:flex absolute top-[70%] left-0  z-10 w-full">
        <div className=" w-10/12 mx-auto gap-2 bg-[#d1ceceb9] space-y-2 md:space-y-0 rounded-sm md:flex p-[6px]">
          <div className=" w-full md:w-7/12 flex gap-2">
            <div className=" w-6/12  flex bg-white rounded-sm  text-sm lg:text-base justify-between px-2 items-center ">
              <MdOutlineDateRange className=" size-4 lg:size-5 text-[#876a20]" />
              <p>{selectedDate ? selectedDate.toDateString() : ""}</p>
              <DatePicker
                className=" w-24"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </div>
            <div className=" w-6/12 bg-white rounded-sm flex  items-center  text-sm lg:text-base  relative">
              <div
                onClick={() => {
                  setRoomeMenuState(!roomeMenuState);
                }}
                className=" w-full hover:bg-gray-50 py-2 flex pl-2"
              >
                <p className=" cursor-default">
                  {rooms.length} Room, {adultsConut} Adult, {childConut}{" "}
                  Children
                </p>
              </div>
              {roomeMenuState && (
                <div className=" absolute top-[100%] left-0 w-full p-2 bg-white border text-gray-600">
                  <p className=" w-full pb-1"> Max. 8 Guest per Room</p>
                  <div className=" grid grid-cols-3 text-sm py-1 bg-gray-200">
                    <p></p>
                    <p className=" pl-2">Adullt(s)</p>
                    <p className="pl-2">Childern</p>
                  </div>

                  {rooms.map((room) => (
                    <div
                      key={room.id}
                      className="grid mt-1 grid-cols-3 text-sm py-1 items-center relative"
                    >
                      <p className="text-gray-800">{room.name}</p>
                      <div className=" w-4/5 border flex items-center justify-between ">
                        <p
                          onClick={(event) => {
                            HandleAdultConut(event.target.innerHTML);
                          }}
                          className=" cursor-default text-center w-1/3 text-lg font-bold"
                        >
                          -
                        </p>
                        <p className="  text-center w-1/3">
                          {HandleAdultConut(serRoomCount)}0
                        </p>
                        <p
                          onClick={(event) => {
                            HandleAdultConut(event.target.innerHTML);
                          }}
                          className=" cursor-default text-center w-1/3 text-lg font-bold"
                        >
                          +
                        </p>
                      </div>
                      <div className=" w-4/5 border flex items-center justify-between ">
                        <p
                          onClick={(event) => {
                            HandleChildConut(event.target.innerHTML);
                          }}
                          className=" cursor-default text-center w-1/3 text-lg font-bold"
                        >
                          -
                        </p>
                        <p className=" w-1/3 text-center">
                          {HandleChildConut(serRoomCount)} 0
                        </p>
                        <p
                          onClick={(event) => {
                            HandleChildConut(event.target.innerHTML);
                          }}
                          className=" cursor-default text-center w-1/3 text-lg font-bold"
                        >
                          +
                        </p>
                      </div>
                      <RxCrossCircled
                        onClick={() => {
                          handleDelete(room.id);
                        }}
                        className={` ${
                          room.id === 1 ? "hidden" : ""
                        } absolute top-2 right-0 text-red-400 `}
                      />
                    </div>
                  ))}
                  <div className=" w-full border my-2"></div>
                  <button
                    onClick={() => {
                      addRoom();
                      serRoomCount(roomConut + 1);
                    }}
                    className=" w-full border py-1 border-[#aa974f] text-[#aa974f] hover:text-[#776a3a]"
                  >
                    + Add Room
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className=" w-full  md:w-5/12 flex gap-2">
            <div className=" w-8/12 bg-white rounded-sm  relative">
              <div
                onClick={() => {
                  setSpecialCodeSelectionState(!specialCodeSelectionState);
                }}
                className=" w-full flex gap-5 border h-full px-5 hover:bg-gray-50 items-center"
              >
                <IoTicketOutline className=" text-gray-700" />{" "}
                <p className=" cursor-default ">Special Code</p>
              </div>
              {specialCodeSelectionState && (
                <div
                  className={` text-sm lg:text-base absolute top-[100%] left-0 w-full bg-white border py-2 px-2 lg:px-5 `}
                >
                  <div>
                    <label htmlFor="selection" className=" text-gray-700">
                      Corporate / Special Rate
                    </label>
                    <div className=" w-full relative">
                      <div
                        onClick={() => {
                          setCodeTypeState(!codeTypeState);
                        }}
                        className=" cursor-pointer w-full flex justify-between items-center text-gray-700 border py-2 my-2 px-2 outline-none hover:border-gray-400"
                      >
                        <p className=" cursor-default outline-none  ">
                          {codeType}
                        </p>
                        <FaChevronDown
                          className={` ${
                            codeTypeState === true ? "rotate-180" : ""
                          } text-gray-600 size-3`}
                        />
                      </div>
                      <div
                        onClick={() => {
                          setCodeTypeState(!codeTypeState);
                        }}
                        className={` ${
                          codeTypeState !== true ? "hidden" : "block"
                        } absolute top-[100%] z-10 bg-white h-40 overflow-y-scroll  text-gray-600 border w-full `}
                      >
                        <div className=" w-full flex justify-between items-center border-b p-2 hover:bg-red-50">
                          <p className=" cursor-default">Select Code Type</p>
                        </div>
                        <div className=" flex relative justify-between items-center border-b ">
                          <p
                            className={` ${
                              codeType === "Corporate" ? "bg-red-50" : ""
                            } cursor-default w-full outline-none hover:bg-red-50 p-2`}
                            onClick={(e) => {
                              handleCodeTypeSelection(e);
                            }}
                          >
                            Corporate
                          </p>
                          <IoMdCheckmarkCircle
                            className={` ${
                              codeType === "Corporate" ? "flex" : " hidden"
                            } absolute top-2 right-1 lg:right-3 text-red-400 size-5`}
                          />
                        </div>
                        <div className=" flex relative justify-between items-center border-b ">
                          <p
                            className={` ${
                              codeType === "Group" ? "bg-red-50" : ""
                            } cursor-default w-full outline-none hover:bg-red-50 p-2`}
                            onClick={(e) => {
                              handleCodeTypeSelection(e);
                            }}
                          >
                            Group
                          </p>
                          <IoMdCheckmarkCircle
                            className={` ${
                              codeType === "Group" ? "flex" : " hidden"
                            } absolute top-2 right-1 lg:right-3 text-red-400 size-5`}
                          />
                        </div>
                        <div className=" flex relative justify-between items-center border-b ">
                          <p
                            className={` ${
                              codeType === "Travel Agency" ? "bg-red-50" : ""
                            } cursor-default w-full outline-none hover:bg-red-50 p-2`}
                            onClick={(e) => {
                              handleCodeTypeSelection(e);
                            }}
                          >
                            Travel Agency
                          </p>
                          <IoMdCheckmarkCircle
                            className={` ${
                              codeType === "Travel Agency" ? "flex" : " hidden"
                            } absolute top-2 right-1 lg:right-3 text-red-400 size-5`}
                          />
                        </div>
                        <div className=" flex relative justify-between items-center border-b ">
                          <p
                            className={` ${
                              codeType === "Promotions" ? "bg-red-50" : ""
                            } cursor-default w-full outline-none hover:bg-red-50 p-2`}
                            onClick={(e) => {
                              handleCodeTypeSelection(e);
                            }}
                          >
                            Promotions
                          </p>
                          <IoMdCheckmarkCircle
                            className={` ${
                              codeType === "Promotions" ? "flex" : " hidden"
                            } absolute top-2 right-1 lg:right-3 text-red-400 size-5`}
                          />
                        </div>
                        <div className=" flex relative justify-between items-center border-b ">
                          <p
                            className={` ${
                              codeType === "Business Travel Program"
                                ? "bg-red-50"
                                : ""
                            } cursor-default w-full outline-none hover:bg-red-50 p-2`}
                            onClick={(e) => {
                              handleCodeTypeSelection(e);
                            }}
                          >
                            Business Travel Program
                          </p>
                          <IoMdCheckmarkCircle
                            className={` ${
                              codeType === "Business Travel Program"
                                ? "flex"
                                : " hidden"
                            } absolute top-2 right-1 lg:right-3 text-red-400 size-5`}
                          />
                        </div>
                      </div>
                    </div>
                    <input
                      className="w-full border py-2 pl-2 my-2 outline-none hover:border-gray-400"
                      type="text"
                      placeholder="Enter Code"
                    />
                  </div>
                </div>
              )}
            </div>
            <button className=" w-4/12 bg-[#876a20] py-2 text-white rounded-sm">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
