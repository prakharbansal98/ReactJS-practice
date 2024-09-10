import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2">
        <WelcomeBanner />
      </div>
      <div className="col-span-1">Right Section</div>
    </div>
  );
};

export default Courses;
