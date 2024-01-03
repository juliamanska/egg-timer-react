import "./App.css";
import Egg from "./Components/Egg";
import CookingSlider from "./Components/CookingSlider";
import { LevelProvider } from "./Components/CookingContext";
import Timer from "./Components/Timer";
function App() {
  return (
    <LevelProvider>
      <section className="timer">
        <CookingSlider />
        <div className="egg-timer">
          <Egg />
          <Timer />
        </div>
      </section>
    </LevelProvider>
  );
}

export default App;
