import React from "react";

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btns">
          <button>Shop Now</button>
          <button className="sec-btn">Category</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="./images/shoe_image.png"></img>
      </div>
    </div>
  );
}

export default HeroSection;
