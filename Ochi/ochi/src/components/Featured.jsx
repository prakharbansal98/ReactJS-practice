import React from "react";

function Featured() {
  return (
    <div className="w-full  py-10">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-['Nueue Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="cards flex gap-5 mt-10 px-10">
        <div className="cardcontainer relative w-1/2 h-[75vh] overflow-hidden">
          <h1 className="absolute  top-1/2 left-full -translate-x-1/2 -translate-y-1/2 text-6xl font-['Agency_FB_semibold']">
            FYDE
          </h1>
          <div className="card rounded-xl w-full h-full overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
            />
          </div>
        </div>
        <div className="cardcontainer relative w-1/2 h-[75vh] overflow-hidden">
          <div className="card rounded-xl w-full h-full overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
