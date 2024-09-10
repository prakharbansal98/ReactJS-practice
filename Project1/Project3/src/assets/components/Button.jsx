import React from "react";
import styled from "styled-components";

export const Button = ({ text }) => {
  return <button>{text}</button>;
};

const button = styled.button`
  /* all: unset; */
  background-color: black;
  color: white;
  width: 220px;
  border-radius: 5px;
  padding: 10px 18px;
`;
