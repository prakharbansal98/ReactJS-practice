import { useState } from "react";
import "./App.css";

function App() {
  const maxLim = 10;
  const minLim = 0;
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    if (counter <= maxLim) {
      setCounter(counter + 1);
    }
  };

  console.log(counter);

  const decrementHandler = () => {
    if (counter > minLim) setCounter(counter - 1);
  };
  return (
    <div>
      <button onClick={incrementHandler}> + </button>
      <h1> {counter} </h1>
      <button onClick={decrementHandler}> - </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default App;
