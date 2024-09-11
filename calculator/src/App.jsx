import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    setInput(eval(input));
  };

  return (
    <div>
      <h1>{input}</h1>
      <div style={{ display: "flex" }}>
        <button onClick={() => setInput("")}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>X</button>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => calculateResult()}>=</button>
      </div>
    </div>
  );
};

export default App;
