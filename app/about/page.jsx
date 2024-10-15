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
          <h4 className="text-center text-3xl font-semibold">
            A job is worth doing together
          </h4>
          <p className="text-center my-2">
            Meet the dedicated team at Loom, revolutionizing the way we farm
            with innovative, beautiful, and sustainable solutions for the home.
          </p>
          <div className="flex items-center justify-evenly mt-8">
            <User />
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

const User = () => {
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
        <h4 className="text-3xl font-semibold">Rishabh Mathur</h4>

        <div className="flex items-center gap-x-2">
          <CgWorkAlt className="mt-1 text-xl" />
          <span>Founder</span>
        </div>
        <div className="flex items-center gap-x-2">
          <MdOutlineEmail className="mt-1 text-xl" />
          <span>Rishabh@gmail.com</span>
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
