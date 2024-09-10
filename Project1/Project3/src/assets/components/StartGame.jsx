import React from "react";
// import { Button } from "./Button";
import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="./images/dices 1.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  width: 220px;
  border-radius: 5px;
  padding: 10px 18px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.4s background ease-out;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
