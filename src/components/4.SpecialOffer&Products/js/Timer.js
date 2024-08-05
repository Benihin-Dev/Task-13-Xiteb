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

  const renderTimer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <p className="timer-expired px-2 rounded bg-white">Offer Expired</p>
      );
    } else {
      const totalHours = Math.floor(hours * 24 + hours); // Convert days to hours and add them to hours
      const hoursStr = totalHours.toString().padStart(2, "0");
      const minutesStr = minutes.toString().padStart(2, "0");
      const secondsStr = seconds.toString().padStart(2, "0");

      return (
        <div className="timer-container flex  gap-1 cursor-default items-center justify-center  text-gray-600">
          <div>
            <div className=" size-12 p-3 bg-[#e6e6e6]  rounded  text-lg flex items-center justify-center  font-semibold">
              <span className=" "> {hoursStr}</span>
            </div>
            <p className=" w-full text-center mt-1 text-xs">HOURS</p>
          </div>
          <div className=" flex items-center justify-center mb-5 text-lg font-bold">
            <span className=" ">:</span>
          </div>
          <div>
            <div className=" size-12 p-3 bg-[#e6e6e6]  rounded  text-lg flex items-center justify-center  font-semibold">
              <span className=" "> {minutesStr}</span>
            </div>

            <p className=" w-full text-center mt-1 text-xs">MINS</p>
          </div>
          <div className=" flex items-center justify-center mb-5 text-lg font-bold">
            <span className=" ">:</span>
          </div>
          <div>
            <div className=" size-12 p-3 bg-[#e6e6e6]  rounded  text-lg flex items-center justify-center  font-semibold">
              <span className=" ">{secondsStr}</span>
            </div>
            <p className=" w-full text-center mt-1 text-xs">SECS</p>
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
