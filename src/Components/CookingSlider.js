import React from "react";
import { useLevel, useLevelUpdate, useClicked } from "./CookingContext";

const CookingSlider = () => {
  const displayLevelOfCooking = useLevel();
  const handleLevelOfCooking = useLevelUpdate();
  let { clicked } = useClicked();

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
          disabled={clicked}
        />
      </form>
    </div>
  );
};

export default CookingSlider;
