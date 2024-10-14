"use client";
import React, { useEffect, useRef } from "react";
import Leftbar from "../Components/Leftbar";
import Sidebar from "../Components/Sidebar";

const AiAgents = () => {
  return (
    <div className="flex bg-darkPurple">
      <Leftbar />
      <div className="dashboard-width">
        <Sidebar />
        <div className="text-white">About</div>
      </div>
    </div>
  );
};

export default AiAgents;
