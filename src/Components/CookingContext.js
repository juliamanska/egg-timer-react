import React, { useState, useContext } from "react";

const LevelContext = React.createContext();
const LevelUpdateContext = React.createContext();
const TimeContext = React.createContext();

export const useLevel = () => {
  return useContext(LevelContext);
};

export const useLevelUpdate = () => {
  return useContext(LevelUpdateContext);
};

export const useTime = () => {
  return useContext(TimeContext);
};

export const LevelProvider = ({ children }) => {
  const [levelOfCooking, setLevelOfCooking] = useState(62);
  const [time, setTime] = useState(5);

  const handleColor = (event) => {
    const changeLevelOfCooking = event.target.value;
    setLevelOfCooking(changeLevelOfCooking);
    handleTime(changeLevelOfCooking);
  };

  const handleTime = (changeLevelOfCooking) => {
    if (changeLevelOfCooking >= 0 && changeLevelOfCooking <= 10) {
      setTime(10);
    } else if (changeLevelOfCooking >= 11 && changeLevelOfCooking <= 20) {
      setTime(9);
    } else if (changeLevelOfCooking >= 21 && changeLevelOfCooking <= 30) {
      setTime(8);
    } else if (changeLevelOfCooking >= 31 && changeLevelOfCooking <= 40) {
      setTime(7);
    } else if (changeLevelOfCooking >= 41 && changeLevelOfCooking <= 50) {
      setTime(6);
    } else if (changeLevelOfCooking >= 51 && changeLevelOfCooking <= 62) {
      setTime(5);
    }
  };

  return (
    <div>
      <LevelContext.Provider value={levelOfCooking}>
        <LevelUpdateContext.Provider value={handleColor}>
          <TimeContext.Provider value={time}>{children}</TimeContext.Provider>
        </LevelUpdateContext.Provider>
      </LevelContext.Provider>
    </div>
  );
};
