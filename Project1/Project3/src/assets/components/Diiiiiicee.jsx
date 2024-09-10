import React, { useState } from "react";

const Diiiiiicee = () => {
  const [imageNum, setImageNum] = useState(1);

  let rndmNumber;
  const changeImage = () => {
    rndmNumber = Math.floor(Math.random() * 6 + 1);
    setImageNum(rndmNumber);
  };

  return (
    <div onClick={changeImage}>
      <img src={`/images/dice_${imageNum}.png`} />
    </div>
  );
};

export default Diiiiiicee;
