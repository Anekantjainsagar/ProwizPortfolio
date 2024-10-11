"use client";
import React from "react";
import Image from "next/image";
import logo from "@/app/Assets/prowiz.png";
import { IoHomeOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { RiRobot2Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";

const Leftbar = () => {
  let pathname = usePathname();

  return (
    <div className="w-[16%] p-4 border-r h-screen border-r-gray-900 flex flex-col justify-between">
      <div className="w-full">
        <Image
          src={logo}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-[10vw] invert"
        />
        <div className="mt-8 text-white">
          {[
            { icon: <IoHomeOutline />, title: "Dashboard", path: "/home" },
            { icon: <RiRobot2Line />, title: "AI Agents", path: "/agents" },
          ].map((e, i) => {
            return (
              <div
                key={i}
                className={`flex items-center gap-x-2 text-lg py-2.5 px-4 rounded-md hover:bg-gray-500/15 ${
                  pathname === e?.path && "bg-gray-500/15"
                } cursor-pointer transition-all`}
              >
                <span className="text-2xl">{e?.icon}</span>
                <p>{e?.title}</p>
              </div>
            );
          })}
        </div>
      </div>{" "}
      <div
        className={`flex items-center gap-x-2 text-lg py-2.5 px-4 rounded-md text-red-500 hover:bg-gray-500/15 cursor-pointer transition-all`}
      >
        <span className="text-2xl">
          <CiLogout />
        </span>
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Leftbar;
