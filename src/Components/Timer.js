import React, { useState, useEffect } from "react";
import { useTime } from "./CookingContext";

const Timer = () => {
  const displayTime = useTime();
  const [minutes, setMinutes] = useState(displayTime);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    setMinutes(displayTime);
  }, [displayTime]);

  const countTime = () => {
    const newInterval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          setMinutes((prevMinutes) => {
            if (prevMinutes === 0) {
              clearInterval(newInterval);
              setIntervalId(null);
              return 0;
            }
            return prevMinutes - 1;
          });
          return 59;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    setIntervalId(newInterval);
  };

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds =
    seconds < 10 ? "0" + seconds : seconds === 60 ? "00" : seconds;

  const handleStartClick = () => {
    if (!intervalId) {
      countTime();
    }
  };

  return (
    <div>
      <h2>
        {formattedMinutes}:{formattedSeconds}
      </h2>
      <button onClick={handleStartClick}>Start</button>
    </div>
  );
};

export default Timer;
