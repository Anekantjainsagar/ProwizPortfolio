"use client";
import React from "react";

import Leftbar from "../Components/Leftbar";
import Sidebar from "../Components/Sidebar";
import { FaFigma } from "react-icons/fa";
import { SiTableau, SiPowerbi, SiLooker } from "react-icons/si";
import { useRouter } from "next/navigation";

const Home = () => {
  return (
    <div className="flex bg-darkPurple">
      <Leftbar />
      <div className="w-[84%]">
        <Sidebar />
        <div className="grid grid-cols-3 gap-5 py-4 px-5">
          {[
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
          ].map((e, i) => {
            return <Block key={i} data={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  const history = useRouter();

  return (
    <div
      onClick={() => {
        history.push(
          `/home/${data?.title?.toLowerCase()?.replaceAll(" ", "-")}`
        );
      }}
      className="text-white bg-gray-700/10 px-4 py-4 rounded-lg shadow-lg shadow-gray-600/10"
    >
      <h4 className="flex items-center gap-x-2 text-lg">
        <span className="text-2xl">{data?.icon}</span>
        {data?.title} Overview
      </h4>
      <p className="text-gray-200 my-1.5">Generated using {data?.title}</p>
      <button className="bg-newBlue text-white px-4 py-1.5 rounded-md mt-1">
        View Report
      </button>
    </div>
  );
};

export default Home;
