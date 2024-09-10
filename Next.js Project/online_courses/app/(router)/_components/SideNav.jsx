import { BadgeIcon, BookOpen, GraduationCap, icons } from "lucide-react";
import Image from "next/image";
import React from "react";

const SideNav = () => {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
    },
    { id: 2, name: "Membership", icon: BadgeIcon },

    { id: 3, name: "Be Instructor", icon: GraduationCap },
  ];
  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <Image
        src="/next.svg"
        width={70}
        height={80}
        className="hover:animate-pulse"
      />
      <hr className="mt-7"></hr>
      <div className="mt-8">
        {menu.map((item, index) => (
          <div className="group flex gap-2 mt-1 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200">
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
