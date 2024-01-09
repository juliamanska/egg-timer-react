import React, { useState, useEffect, useRef } from "react";
import { useTime } from "./CookingContext";
import endSound from "../endSound.mp3";
let startCount = false;

const Timer = () => {
  const displayTime = useTime();
  const [minutes, setMinutes] = useState(displayTime);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const audioRef = useRef(null);
  const buttonRef = useRef(null);

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
              setSeconds(0);
              playEndSound();
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

  const playEndSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const hideStart = () => {
    if (buttonRef.current) {
      buttonRef.current.style.visibility = "hidden";
    }
  };

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds =
    seconds < 10 ? "0" + seconds : seconds === 60 ? "00" : seconds;

  const handleStartClick = () => {
    if (!intervalId) {
      countTime();
      startCount = true;
    }
  };

  return (
    <div className="start-time">
      <h2>
        {formattedMinutes}:{formattedSeconds}
      </h2>
      <button ref={buttonRef} onClick={handleStartClick} disabled={startCount}>
        Start
      </button>
      <audio ref={audioRef} src={endSound}></audio>
    </div>
  );
};

export default Timer;
