"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/app/Assets/prowiz.png";
import { IoHomeOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { RiMenu3Fill, RiRobot2Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { mainData } from "../data/main";
import { AiOutlineClose } from "react-icons/ai";

const Leftbar = () => {
  const [setshowNav, setSetshowNav] = useState(false);
  let pathname = usePathname();
  let history = useRouter();

  return (
    <div className="w-full md:w-[16%] fixed bg-darkPurple border-b border-b-gray-100/10 p-4 border-r h-fit md:h-screen border-r-gray-900 flex flex-row md:flex-col justify-between md:items-start items-center">
      <div className="w-full">
        <Image
          src={logo}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-[34vw] md:w-[10vw] invert"
          onClick={() => history.push("/home")}
        />
        <div className="mt-8 text-white md:block hidden">
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
                  className={`flex items-center gap-x-2 min-[1600px]:text-lg py-2.5 px-4 rounded-md hover:bg-gray-500/15 ${
                    pathname === e?.path && "bg-gray-500/15"
                  } cursor-pointer transition-all ${e?.routes && "mb-1"}`}
                  onClick={() => {
                    history.push(e?.path);
                  }}
                >
                  <span className="text-xl min-[1600px]:text-2xl">
                    {e?.icon}
                  </span>
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
                        className={`text-gray-200 px-2 min-[1600px]:px-4 py-2 min-[1600px]:text-base text-sm hover:bg-gray-500/15 ml-1 cursor-pointer rounded-lg flex items-center gap-x-2 ${pathname?.includes(
                          data?.title?.toLowerCase()?.replaceAll(" ", "-")
                            ? "bg-gray-500/15"
                            : ""
                        )}`}
                      >
                        <GoDotFill className="min-[1600px]:text-base text-xs" />{" "}
                        {data?.title}{" "}
                        {data?.title != "Figma Mock-ups" && "Dashboards"}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
      <RiMenu3Fill
        className="block md:hidden text-3xl text-white"
        onClick={() => setSetshowNav(!setshowNav)}
      />
      {setshowNav && (
        <div className="bg-darkPurple h-[100vh] flex flex-col justify-between w-[65vw] px-3 absolute top-0 right-0 py-5">
          <div className="text-white">
            {" "}
            <div className="flex justify-end text-white text-3xl mb-2">
              <AiOutlineClose onClick={() => setSetshowNav(false)} />
            </div>
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
                    className={`flex items-center gap-x-2 min-[1600px]:text-lg py-2.5 px-4 rounded-md hover:bg-gray-500/15 ${
                      pathname === e?.path && "bg-gray-500/15"
                    } cursor-pointer transition-all ${e?.routes && "mb-1"}`}
                    onClick={() => {
                      history.push(e?.path);
                    }}
                  >
                    <span className="text-xl min-[1600px]:text-2xl">
                      {e?.icon}
                    </span>
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
                          className={`text-gray-200 px-2 min-[1600px]:px-4 py-2 min-[1600px]:text-base text-sm hover:bg-gray-500/15 ml-2.5 cursor-pointer rounded-lg flex items-center gap-x-2 ${pathname?.includes(
                            data?.title?.toLowerCase()?.replaceAll(" ", "-")
                              ? "bg-gray-500/15"
                              : ""
                          )}`}
                        >
                          <GoDotFill className="min-[1600px]:text-base text-xs" />{" "}
                          {data?.title}{" "}
                          {data?.title != "Figma Mock-ups" && "Dashboards"}
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>{" "}
          <div
            className={`flex items-center gap-x-2 min-[1600px]:text-lg py-2.5 px-2 min-[1600px]:px-4 rounded-md text-red-500 hover:bg-gray-500/15 cursor-pointer transition-all`}
            onClick={() => {
              history.push("/");
            }}
          >
            <span className="text-xl min-[1600px]:text-2xl">
              <CiLogout />
            </span>
            <p>Logout</p>
          </div>
        </div>
      )}
      <div
        className={`hidden md:flex items-center gap-x-2 min-[1600px]:text-lg py-2.5 px-2 min-[1600px]:px-4 rounded-md text-red-500 hover:bg-gray-500/15 cursor-pointer transition-all`}
        onClick={() => {
          history.push("/");
        }}
      >
        <span className="text-xl min-[1600px]:text-2xl">
          <CiLogout />
        </span>
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Leftbar;
