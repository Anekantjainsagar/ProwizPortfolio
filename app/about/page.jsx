"use client";
import React from "react";
import Leftbar from "../Components/Leftbar";
import Sidebar from "../Components/Sidebar";
import Image from "next/image";
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { CgWorkAlt } from "react-icons/cg";

const AiAgents = () => {
  return (
    <div className="flex md:flex-row flex-col bg-darkPurple">
      <Leftbar />
      <div className="dashboard-width">
        <Sidebar />
        <div className="text-white py-4 px-5 text-lg">
          <h4 className="text-center text-2xl min-[1600px]:text-3xl font-semibold md:w-7/12 mx-auto leading-relaxed">
            At Prowiz Analytics, we are driven by a singular mission <br />
            <span className="bg-[#0055fd]">
              to make actionable data accessible to all.
            </span>
          </h4>
          <p className="text-base min-[1600px]:text-lg text-gray-200 text-center md:w-8/12 mx-auto mt-2 leading-[27px] tracking-wide">
            We have assembled a team of Data Engineers, Business Intelligence
            Experts and Al Specialists each of whom have spent the proverbial
            &quot;10,000 hours&quot; to master their craft and bring together
            valuable experience from different domains and business sizes.
          </p>
          <h4 className="text-center text-3xl min-[1600px]:text-4xl font-semibold mt-12">
            Meet Our Leadership Team
          </h4>
          <div className="flex md:flex-row flex-col items-start md:px-0 px-1 gap-y-5 md:items-center justify-evenly mt-8">
            <User name="Rishabh Mathur" email="Rishabh@prowiz.io" />
            <User name="Varun Sethi" email="Varun@prowiz.io" />
          </div>
        </div>
      </div>
    </div>
  );
};

const User = ({ name, email }) => {
  return (
    <div className="flex items-start justify-center">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
        alt="User image"
        width={1000}
        height={1000}
        className="w-[30vw] md:w-[7.5vw] aspect-square rounded-full"
      />
      <div className="ml-4">
        <h4 className="text-2xl min-[1600px]:text-3xl font-semibold">{name}</h4>

        <div className="flex items-center gap-x-2 text-base min-[1600px]:text-lg">
          <CgWorkAlt className="mt-1 min-[1600px]:text-xl" />
          <span>Co-Founder</span>
        </div>
        <div className="flex items-center gap-x-2 text-base min-[1600px]:text-lg">
          <MdOutlineEmail className="mt-1 min-[1600px]:text-xl" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-x-2 text-base min-[1600px]:text-lg">
          <MdOutlineCall className="mt-1 min-[1600px]:text-xl" />
          <span>+91 12345 67891</span>
        </div>
      </div>
    </div>
  );
};

export default AiAgents;
