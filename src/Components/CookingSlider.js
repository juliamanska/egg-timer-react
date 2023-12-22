import React, { useState } from "react";
import Egg from "./Egg";

const CookingSlider = () => {
  const [levelOfCooking, setLevelOfCooking] = useState(45);

  const handleLevelOfCooking = (event) => {
    const changeLevelOfCooking = event.target.value;
    setLevelOfCooking(changeLevelOfCooking);
  };

  return (
    <div>
      <form>
        <label>
          {levelOfCooking}
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
