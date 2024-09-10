import { useState } from "react";
import Diiiiiicee from "./Diiiiiicee";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRndmNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    } 

    const rndmNumber = generateRndmNum(1, 7);
    setCurrentDice(rndmNumber);


    if (selectedNumber == rndmNumber) {
      setScore(score + 10);
      setSelectedNumber();
    } else {
      setScore(score - 2);
      setSelectedNumber();
    }
  };

  return (
    <MainConatiner>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
    </MainConatiner>
  );
};

export default GamePlay;

const MainConatiner = styled.div`
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
