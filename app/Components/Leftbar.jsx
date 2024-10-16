"use client";
import React from "react";
import Image from "next/image";
import logo from "@/app/Assets/prowiz.png";
import { IoHomeOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { RiRobot2Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { mainData } from "../data/main";

const Leftbar = () => {
  let pathname = usePathname();
  let history = useRouter();

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
            {
              icon: <IoHomeOutline />,
              title: "Dashboard",
              path: "/home",
              routes: mainData,
            },
            { icon: <RiRobot2Line />, title: "AI Agents", path: "/agents" },
            {
              icon: <IoIosInformationCircleOutline />,
              title: "About",
              path: "/about",
            },
          ].map((e, i) => {
            return (
              <div key={i}>
                <div
                  className={`flex items-center gap-x-2 text-lg py-2.5 px-4 rounded-md hover:bg-gray-500/15 ${
                    pathname === e?.path && "bg-gray-500/15"
                  } cursor-pointer transition-all ${e?.routes && "mb-1"}`}
                  onClick={() => {
                    history.push(e?.path);
                  }}
                >
                  <span className="text-2xl">{e?.icon}</span>
                  <p>{e?.title}</p>
                </div>
                {!(
                  pathname == "/home" ||
                  pathname == "/agents" ||
                  pathname == "/about"
                ) &&
                  e?.routes?.map((data, i) => {
                    return (
                      <div
                        onClick={() => {
                          history.push(
                            `/home/${data?.title
                              ?.toLowerCase()
                              ?.replaceAll(" ", "-")}`
                          );
                        }}
                        key={i}
                        className={`text-gray-200 px-4 py-2 hover:bg-gray-500/15 ml-1 cursor-pointer rounded-lg flex items-center gap-x-2 ${pathname?.includes(
                          data?.title?.toLowerCase()?.replaceAll(" ", "-")
                            ? "bg-gray-500/15"
                            : ""
                        )}`}
                      >
                        <GoDotFill /> {data?.title}{" "}
                        {data?.title != "Figma Mock-ups" && "Dashboards"}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`flex items-center gap-x-2 text-lg py-2.5 px-4 rounded-md text-red-500 hover:bg-gray-500/15 cursor-pointer transition-all`}
        onClick={() => {
          history.push("/");
        }}
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
