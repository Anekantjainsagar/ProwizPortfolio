"use client";
import React from "react";
import Leftbar from "../Components/Leftbar";
import Sidebar from "../Components/Sidebar";
import Image from "next/image";
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { CgWorkAlt } from "react-icons/cg";

const AiAgents = () => {
  return (
    <div className="flex bg-darkPurple">
      <Leftbar />
      <div className="dashboard-width">
        <Sidebar />
        <div className="text-white py-4 px-5 text-lg">
          <h4 className="text-center text-3xl font-semibold w-7/12 mx-auto leading-relaxed">
            At Prowiz Analytics, we are driven by a singular mission <br />
            <span className="bg-[#0055fd]">
              to make actionable data accessible to all.
            </span>
          </h4>
          <p className="text-lg text-gray-200 text-center w-8/12 mx-auto mt-2 leading-[27px] tracking-wide">
            We have assembled a team of Data Engineers, Business Intelligence
            Experts and Al Specialists each of whom have spent the proverbial
            "10,000 hours" to master their craft and bring together valuable
            experience from different domains and business sizes.
          </p>
          <h4 className="text-center text-4xl font-semibold mt-12">
            Meet Our Leadership Team
          </h4>
          <div className="flex items-center justify-evenly mt-8">
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
        className="w-[7.5vw] aspect-square rounded-full"
      />
      <div className="ml-4">
        <h4 className="text-3xl font-semibold">{name}</h4>

        <div className="flex items-center gap-x-2">
          <CgWorkAlt className="mt-1 text-xl" />
          <span>Co-Founder</span>
        </div>
        <div className="flex items-center gap-x-2">
          <MdOutlineEmail className="mt-1 text-xl" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <MdOutlineCall className="mt-1 text-xl" />
          <span>+91 12345 67891</span>
        </div>
      </div>
    </div>
  );
};

export default AiAgents;
