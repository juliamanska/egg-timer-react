import React from "react";
import { useLevel } from "./CookingContext";

const Egg = () => {
  const yolkColor = useLevel();

  const yolkStyle = {
    background: `radial-gradient(rgb(249, 150, 2) ${yolkColor}%, rgb(255, 234, 86) 80%)`,
    boxShadow: `0 0 25px -3px rgb(230, 212, 10)`,
  };

  return (
    <div className="egg">
      <div className="albumen">
        <div className="yolk" style={yolkStyle}></div>
      </div>
    </div>
  );
};

export default Egg;
