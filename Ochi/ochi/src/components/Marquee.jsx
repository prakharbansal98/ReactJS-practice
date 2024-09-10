import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="w-full py-10 rounded-tl-2xl rounded-tr-2xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap">
        <h1 className="text-[24vw] leading-none gap-10 font-['Agency_FB_semibold'] p-10">
          WE ARE OCHI
        </h1>
        <h1 className="text-[24vw] leading-none gap-10 font-['Agency_FB_semibold'] p-10">
          WE ARE OCHI
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
