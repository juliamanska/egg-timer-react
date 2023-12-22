import React from "react";
import { useTime } from "./CookingContext";

const Timer = () => {
  const displayTime = useTime();

  return <div> {displayTime}</div>;
};

export default Timer;
