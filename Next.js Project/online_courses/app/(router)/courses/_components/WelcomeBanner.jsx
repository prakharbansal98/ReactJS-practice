import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-2">
      <Image src="/panda.webp" height={100} width={100} />

      <div>
        <h2 className="font-bold text-[27px]">
          Welcome to <span className="text-primary">Prakhar</span> Explores
        </h2>
      </div>
    </div>
  );
};

export default WelcomeBanner;
