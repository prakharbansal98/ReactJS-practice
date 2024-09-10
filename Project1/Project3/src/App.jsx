import styled from "styled-components";
import StartGame from "./assets/components/StartGame";
import { useState } from "react";
import GamePlay from "./assets/components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
