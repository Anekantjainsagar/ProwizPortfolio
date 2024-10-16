"use client";
import React from "react";
import Leftbar from "../Components/Leftbar";
import Sidebar from "../Components/Sidebar";
import { useRouter } from "next/navigation";
import { mainData } from "../data/main";

const Home = () => {
  return (
    <div className="flex bg-darkPurple">
      <Leftbar />
      <div className="dashboard-width h-[94vh]">
        <Sidebar />
        <div className="grid grid-cols-2 gap-4 md:gap-5 py-4 px-5">
          {mainData.map((e, i) => {
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
      <h4 className="flex items-start md:items-center gap-x-2 md:text-lg font-medium">
        <span className="text-2xl">{data?.icon}</span>
        {data?.title} Overview
      </h4>
      <p className="text-gray-200 min-[1600px]:text-base text-sm my-1.5">
        Generated using {data?.title}
      </p>
      <button className="bg-newBlue text-white md:w-fit w-full md:px-4 py-1.5 rounded-md mt-1 text-sm md:text-base">
        View Report
      </button>
    </div>
  );
};

export default Home;
