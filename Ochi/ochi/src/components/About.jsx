import React from "react";

export default function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Nueue Montreal'] text-[3vw] leading-[3.1vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-10 border-t-[2px] mt-10 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-[3vw]"> Our Approach</h1>
          <button className=" flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className="w-2 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] mt-3 rounded-3xl bg-[#859c33]"></div>
      </div>
    </div>
  );
}
