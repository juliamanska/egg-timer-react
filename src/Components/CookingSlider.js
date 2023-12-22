import React from "react";
import { useLevel, useLevelUpdate } from "./CookingContext";

const CookingSlider = () => {
  const displayLevelOfCooking = useLevel();
  const handleLevelOfCooking = useLevelUpdate();

  return (
    <div>
      <form>
        <label>
          {displayLevelOfCooking}
          <input
            type="range"
            id="level"
            name="level"
            min="10"
            max="90"
            onChange={handleLevelOfCooking}
          />
        </label>
      </form>
    </div>
  );
};

export default CookingSlider;
