import React, { useState, useContext } from "react";

const LevelContext = React.createContext();
const LevelUpdateContext = React.createContext();

export const useLevel = () => {
  return useContext(LevelContext);
};

export const useLevelUpdate = () => {
  return useContext(LevelUpdateContext);
};

export const LevelProvider = ({ children }) => {
  const [levelOfCooking, setLevelOfCooking] = useState(62);

  const handleColor = (event) => {
    const changeLevelOfCooking = event.target.value;
    setLevelOfCooking(changeLevelOfCooking);
  };

  return (
    <div>
      <LevelContext.Provider value={levelOfCooking}>
        <LevelUpdateContext.Provider value={handleColor}>
          {children}
        </LevelUpdateContext.Provider>
      </LevelContext.Provider>
    </div>
  );
};
