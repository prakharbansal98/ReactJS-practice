import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-10">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker overflow-hidden">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <div className="mr-3 rounded-md w-[9vw] h-[4vw] relative bg-red-500"></div>
                )}
                <h1
                  className="flex items-center uppercase text-7xl leading-[5vw]
                } tracking-tight font-['Agency_FB_semibold']"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-40 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
