import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

export default function Timer({ endDate }) {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateRemainingTime = () => {
    const difference = endDate - currentTime;
    return difference > 0 ? difference : 0;
  };

  const renderTimer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <p className="timer-expired px-2 rounded bg-white">Offer Expired</p>
      );
    } else {
      const daysStr = days.toString().padStart(2, "0");
      const hoursStr = hours.toString().padStart(2, "0");
      const minutesStr = minutes.toString().padStart(2, "0");
      const secondsStr = seconds.toString().padStart(2, "0");

      return (
        <div className="timer-container font-montserrat  flex gap-3 cursor-default items-center justify-center text-gray-600">
          <div className=" bg-white text-[#2faf36] w-[55px] h-[62px] rounded-md flex items-center justify-center  ">
            <div>
              <p className=" text-center font-semibold text-lg leading-6 ">
                {daysStr}
              </p>
              <p className="w-full text-center text-gray-600 text-sm leading-4">
                Days
              </p>
            </div>
          </div>
          <div className=" bg-white text-[#2faf36] w-[55px] h-[62px] rounded-md flex items-center justify-center  ">
            <div>
              <p className=" text-center font-semibold text-lg leading-6 ">
                {hoursStr}
              </p>
              <p className="w-full text-center text-gray-600 text-sm leading-4">
                Hours
              </p>
            </div>
          </div>
          <div className=" bg-white text-[#2faf36] w-[55px] h-[62px] rounded-md flex items-center justify-center  ">
            <div>
              <p className=" text-center font-semibold text-lg leading-6 ">
                {minutesStr}
              </p>
              <p className="w-full text-center text-gray-600 text-sm leading-4">
                Min
              </p>
            </div>
          </div>
          <div className=" bg-white text-[#2faf36] w-[55px] h-[62px] rounded-md flex items-center justify-center  ">
            <div>
              <p className=" text-center font-semibold text-lg leading-6 ">
                {secondsStr}
              </p>
              <p className="w-full text-center text-gray-600 text-sm leading-4">
                Sec
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  const remainingTime = calculateRemainingTime();

  return (
    <div>
      {remainingTime > 0 ? (
        <Countdown date={endDate} renderer={renderTimer} />
      ) : (
        <p className="timer-expired px-2 rounded bg-white">Offer Expired</p>
      )}
    </div>
  );
}
