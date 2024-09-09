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
      // Convert days to hours and add them to the current hours count
      const totalHours = (days * 24 + hours)
        .toString()
        .padStart(2, "0")
        .split("");
      const minutesStr = minutes.toString().padStart(2, "0").split("");
      const secondsStr = seconds.toString().padStart(2, "0").split("");

      const renderDigit = (digit, bgColor = "bg-[#103178]") => (
        <div
          className={`${bgColor} text-[#ffffff] h-7 w-6 rounded-sm flex items-center justify-center`}
        >
          <p className="text-center font-semibold text-sm leading-6">{digit}</p>
        </div>
      );

      return (
        <div className="timer-container font-montserrat flex gap-1 cursor-default items-center justify-center text-gray-600">
          <div className="flex gap-[2px]">
            {totalHours.map((digit, index) => (
              <React.Fragment key={index}>
                {renderDigit(digit)} {/* Applying bg-black here */}
              </React.Fragment>
            ))}
          </div>
          <p className=" text-xl font-semibold text-[#103178]">:</p>

          <div className="flex gap-[2px]">
            {minutesStr.map((digit, index) => (
              <React.Fragment key={index}>
                {renderDigit(digit)} {/* Default white background */}
              </React.Fragment>
            ))}
          </div>
          <p className=" text-xl font-semibold text-[#103178]">:</p>

          <div className="flex gap-[2px]">
            {secondsStr.map((digit, index) => (
              <React.Fragment key={index}>
                {renderDigit(digit)} {/* Default white background */}
              </React.Fragment>
            ))}
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
