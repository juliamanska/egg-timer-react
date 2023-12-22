import "./App.css";
import Egg from "./Components/Egg";
import CookingSlider from "./Components/CookingSlider";
import { LevelProvider } from "./Components/CookingContext";

function App() {
  return (
    <LevelProvider>
      <div className="timer">
        <CookingSlider />
        <Egg />
      </div>
    </LevelProvider>
  );
}

export default App;
