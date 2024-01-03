import React from "react";
import { useLevel, useLevelUpdate } from "./CookingContext";

const CookingSlider = () => {
  const displayLevelOfCooking = useLevel();
  const handleLevelOfCooking = useLevelUpdate();

  return (
    <div>
      <form>
        <label>{displayLevelOfCooking}</label>
        <input
          type="range"
          id="level"
          name="level"
          min="0"
          max="62"
          onChange={handleLevelOfCooking}
          defaultValue={62}
        />
      </form>
    </div>
  );
};

export default CookingSlider;
