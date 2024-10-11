"use client";
import React from "react";
import Image from "next/image";
import logo from "@/app/Assets/prowiz.png";
import { IoHomeOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { RiRobot2Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { reportsData } from "@/app/data/Reports";

const Leftbar = ({ showDashboards, name }) => {
  let pathname = usePathname();
  let history = useRouter();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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
        {!showDashboards ? (
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
                  onClick={() => {
                    history.push(e?.path);
                  }}
                >
                  <span className="text-2xl">{e?.icon}</span>
                  <p>{e?.title}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 text-white">
            <h6 className="text-xl mb-2">
              {capitalizeFirstLetter(name?.replaceAll("-", " "))}
            </h6>
            {reportsData?.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`py-2 px-3 rounded-md hover:bg-gray-500/15 ${
                    pathname?.includes(
                      e?.title?.toLowerCase()?.replaceAll(" ", "-")
                    ) && "bg-gray-500/15"
                  } cursor-pointer transition-all`}
                  onClick={() => {
                    history.push(
                      `/home/${name}/${e?.title
                        ?.replaceAll(" ", "-")
                        ?.toLowerCase()}`
                    );
                  }}
                >
                  <p>{e?.title}</p>
                </div>
              );
            })}
          </div>
        )}
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
