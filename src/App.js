import React from "react";
import DisplayPlaying from "./Components/DisplayPlaying";
import PauseButton from "./Components/PauseButton";
import PointButton from "./Components/PointButton";
import ResetButton from "./Components/ResetButton";
import Score from "./Components/Score";

function App() {
  return (
    <div>
      <DisplayPlaying />
      <Score />
      <PauseButton />
      <PointButton player="home"/>
      <PointButton player="away"/>
      <ResetButton />
    </div>
  );
}

export default App;
