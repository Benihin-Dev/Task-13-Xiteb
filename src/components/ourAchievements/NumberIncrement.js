import React, { useState, useEffect, useRef } from "react";

const NumberIncrement = ({ targetNumber, incrementCount }) => {
  const [number, setNumber] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const numberRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const incrementNumber = () => {
        setNumber((prevNumber) => {
          if (prevNumber >= targetNumber) {
            clearInterval(intervalRef.current);
            return prevNumber;
          }
          return prevNumber + incrementCount;
        });
      };

      intervalRef.current = setInterval(incrementNumber, 2);

      return () => clearInterval(intervalRef.current);
    }
  }, [isVisible, targetNumber]);

  return (
    <div ref={numberRef}>
      <h1>{number}</h1>
    </div>
  );
};

export default NumberIncrement;
