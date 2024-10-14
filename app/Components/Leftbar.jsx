"use client";
import React from "react";
import Image from "next/image";
import logo from "@/app/Assets/prowiz.png";
import { IoHomeOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { RiRobot2Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { reportsData } from "@/app/data/Reports";
import { SiLooker, SiPowerbi, SiTableau } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

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
              {
                icon: <IoHomeOutline />,
                title: "Dashboard",
                path: "/home",
                routes: [
                  { title: "Tableau", icon: <SiTableau /> },
                  {
                    title: "PowerBI",
                    icon: <SiPowerbi />,
                  },
                  {
                    title: "Looker Studio",
                    icon: <SiLooker />,
                  },
                  {
                    title: "Figma Mock-ups",
                    icon: <FaFigma />,
                  },
                ],
              },
              { icon: <RiRobot2Line />, title: "AI Agents", path: "/agents" },
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
                  {e?.routes?.map((data, i) => {
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
                        className={`text-white px-4 py-2 hover:bg-gray-500/15 cursor-pointer rounded-lg flex items-center gap-x-2 ml-2 ${pathname?.includes(
                          data?.title?.toLowerCase()?.replaceAll(" ", "-")
                            ? "bg-gray-500/15"
                            : ""
                        )}`}
                      >
                        <span className="text-xl">{data?.icon}</span>
                        {data?.title} Overview
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 text-white">
            {/* <h6 className="text-xl mb-2">
              {capitalizeFirstLetter(name?.replaceAll("-", " "))}
            </h6> */}
            <div className="mt-2 text-white">
              {[
                {
                  icon: <IoHomeOutline />,
                  title: "Dashboard",
                  path: "/home",
                  routes: reportsData,
                },
                { icon: <RiRobot2Line />, title: "AI Agents", path: "/agents" },
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
                    {e?.routes?.map((e, i) => {
                      return (
                        <div
                          key={i}
                          className={`py-2 px-3 ml-2 rounded-md hover:bg-gray-500/15 ${
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
                );
              })}
            </div>
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
