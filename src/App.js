import "./App.css";
import Egg from "./Components/Egg";
import CookingSlider from "./Components/CookingSlider";
import { LevelProvider } from "./Components/CookingContext";
import Timer from "./Components/Timer";
function App() {
  return (
    <LevelProvider>
      <div className="timer">
        <CookingSlider />
        <Egg />
        <Timer />
      </div>
    </LevelProvider>
  );
}

export default App;
