"use client";
import React from "react";
import Leftbar from "../Components/Leftbar";
import Sidebar from "../Components/Sidebar";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";

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
          <div className="flex items-center justify-evenly mt-5">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
                alt="User image"
                width={1000}
                height={1000}
                className="w-[13.5vw] aspect-square rounded-full"
              />
              <div className="mt-2 flex flex-col items-center justify-center">
                <h4 className="text-xl text-center font-semibold">
                  Rishabh Mathur
                </h4>
                <p>Founder</p>
                <MdOutlineEmail className="mt-1 text-xl" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
                alt="User image"
                width={1000}
                height={1000}
                className="w-[13.5vw] aspect-square rounded-full"
              />
              <div className="mt-2 flex flex-col items-center justify-center">
                <h4 className="text-xl text-center font-semibold">
                  Rishabh Mathur
                </h4>
                <p>Founder</p>
                <MdOutlineEmail className="mt-1 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAgents;
