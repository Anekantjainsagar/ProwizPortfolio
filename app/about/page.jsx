"use client";
import React from "react";
import Leftbar from "../Components/Leftbar";
import Sidebar from "../Components/Sidebar";
import Image from "next/image";

const AiAgents = () => {
  return (
    <div className="flex bg-darkPurple">
      <Leftbar />
      <div className="dashboard-width">
        <Sidebar />
        <div className="text-white py-4 px-5 text-lg">
          <h1 className="text-3xl font-semibold mb-4">About Us</h1>
          <div className="px-1">
            <p>
              ProWiz Analytics is a leading provider of data engineering and
              visualization solutions, dedicated to helping businesses unlock
              the full potential of their data. With a focus on DataOps, ProWiz
              builds robust, scalable data architectures that streamline data
              management and enhance business intelligence capabilities. Their
              team of experts works closely with clients to understand their
              unique needs, creating custom solutions that simplify complex data
              processes and provide actionable insights.
            </p>
            <p className="mt-2">
              By combining advanced data transformation techniques with powerful
              reporting and visualization tools, ProWiz enables organizations to
              make more informed, data-driven decisions. They also integrate
              DevOps practices to optimize development workflows and improve
              operational efficiency. Whether it&apos;s developing interactive
              dashboards, automating data pipelines, or building scalable
              infrastructures, ProWiz delivers cutting-edge solutions that
              empower businesses to stay competitive in a rapidly evolving
              digital landscape.
            </p>
          </div>
          <p className="px-1">Meet our Founder -</p>
          <div className="flex ml-1 items-start mt-3">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
              alt="User image"
              width={1000}
              height={1000}
              className="w-[3.5vw] aspect-square rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-xl font-semibold">Rishabh Mathur</h4>
              <p>rishabh@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAgents;
