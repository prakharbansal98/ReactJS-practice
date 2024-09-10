import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white h-[60px] my-4 rounded-lg flex justify-center items-center gap-2">
      <img className="h-[30px]" src="./logos_firebase.svg" />
      <h1 className="font-bold">Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
